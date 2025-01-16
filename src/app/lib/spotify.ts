import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const discord_webhook: any = process.env.DISCORD_WEBHOOK;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
export const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player";
export const LAST_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
export const TOP_ARTIST_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=8";


export const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        cache: "no-cache",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        })
    });

    return response.json();
}


export const getTrack = async () => {
    let playing: boolean = false;
    let title: string;
    let artist: string;
    let album: string;
    let albumImageUrl: string;
    let trackUrl: string;
    let artistUrl: string;
    let albumUrl: string;
    
    const { access_token } = await getAccessToken();
    
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    
    if (response.status == 200) {
        const track = await response.json();
        
        playing = track?.is_playing;
        title = track?.item?.name
        artist = track?.item?.artists?.[0]?.name;
        album = track?.item?.album?.name;
        albumImageUrl = track?.item?.album?.images?.[0]?.url;
        trackUrl = track?.item?.external_urls?.spotify;
        artistUrl = track?.item?.artists?.[0]?.external_urls?.spotify;
        albumUrl = track?.item?.album?.external_urls?.spotify;
        
        postWebhook(playing, title, artist, albumImageUrl);

        return { playing, title, artist, album, albumImageUrl, trackUrl, artistUrl, albumUrl }
    } else {
        const { title, artist, album, albumImageUrl, trackUrl, artistUrl, albumUrl } = await getLastPlayed();
        postWebhook(playing, title, artist, albumImageUrl);
        return { playing, title, artist, album, albumImageUrl, trackUrl, artistUrl, albumUrl}
    }
};


export const getLastPlayed = async () => {
    const { access_token } = await getAccessToken();
    const response = await fetch(LAST_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    const data = await response.json();

    const tracks = await data.items;
    const title = tracks?.[0]?.track?.name;
    const artist = tracks?.[0]?.track?.artists?.[0]?.name;
    const album = tracks?.[0]?.track?.album?.name;
    const albumImageUrl = tracks?.[0]?.track?.album?.images?.[0]?.url;
    const trackUrl = tracks?.[0]?.track.external_urls?.spotify;
    const artistUrl = tracks?.[0]?.track.artists?.[0]?.external_urls?.spotify;
    const albumUrl = tracks?.[0]?.track.album?.external_urls?.spotify;
    console.log(album, trackUrl, artistUrl, albumUrl)

    return { title, artist, album, albumImageUrl, trackUrl, artistUrl, albumUrl };
};


export const fetchTopArtists = async () => {
    const { access_token } = await getAccessToken();
    const response = await fetch(TOP_ARTIST_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    let data = await response.json();
    data = data.items;
    const artists = data.map((artist: any) => ({
      name: artist?.name,
      genre: artist?.genres?.[0],
      image: artist?.images?.[0]?.url,
      url: artist?.external_urls?.spotify,
    }));
    return artists
}


export const postWebhook = async (
    playing: Boolean,
    title: String,
    artist: String,
    albumImageUrl: String
) => {
    const json = {
        username: "aexfin-web-spotify-logs",
        avatar_url: "https://github.com/aexfin.png",
        content: `<@&${process.env.WEB_PINGS_ROLE_ID}>\nSomeone just loaded the website 👀\n${playing ? "**Here's what you were listening to at the time:**" : "**Here's what they saw you last listened to:**"}`,
        embeds: [
            {

                title: playing ? "Now Playing" : "Last Played",
                description: `**Track:** ${title}\n**Artist:** ${artist}\n**Your Timestamp:** ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n**Their Timestamp:** ${new Date().toLocaleString()}`,
                color: 3553599,
                image: {
                    url: albumImageUrl,
                },
                
            },
        ],
    };

    try {
        const response = await fetch(discord_webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json),
        });
    } catch (error) {
        console.error("Error sending webhook:", error);
    }
};