import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
export const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player";
export const LAST_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";


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
    let playing: Boolean = false;
    let title: String;
    let artist: String;
    let albumImageUrl: String;
    
    const { access_token } = await getAccessToken();
    
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    
    if (response.status === 200) {
        const track = await response.json();

        playing = track?.is_playing;
        title = track?.item?.name
        artist = track?.item?.artists?.[0]?.name;
        albumImageUrl = track?.item?.album?.images?.[0]?.url;
        
        return { playing, title, artist, albumImageUrl }
    } else {
        const { title, artist, albumImageUrl } = await getLastPlayed();
        return { playing, title, artist, albumImageUrl}
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
    const albumImageUrl = tracks?.[0]?.track?.album?.images?.[0]?.url;

    return { title, artist, albumImageUrl }
};