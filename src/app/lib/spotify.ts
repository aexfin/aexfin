import querystring from "querystring";

type PlayingTrack = {
    is_playing: boolean;
    item: {
        name: string;
        artists: [
            {
                name: string,
            }
        ];
        album: {
            images: [
                {
                    url: string;
                }
            ];
        }
    }
}

type Track = {
    track: {
        id: string;
        name: string;
        artists: [
            {
                name: string,
            }
        ];
        album: {
            images: [
                {
                    url: string;
                }
            ];
        }
    }
}

type TopTrack = {
    id: string;
    external_urls: {
        spotify: string;
    }
    name: string;
    artists: [
        {
            name: string,
        }
    ];
    album: {
        images: [
            {
                url: string;
            }
        ];
    }
}

type TopArtists = {
    id: string;
    external_urls: {
        spotify: string;
    },
    followers: {
        totle: number;
    };
    images: [
        {
            url: string;
        }
    ];
    name: string;
}

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const refresh_token = process.env.REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
export const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player";
export const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
export const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10";
export const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10"

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

export const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();
    console.log();
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    const data = await response.json();

    const tracks: Track = await data.items;
    const title = tracks?.track?.name;
    const artist = tracks?.track?.artists?.[0]?.name;
    const albumImageUrl = tracks?.track?.album?.images?.[0]?.url;

    return { title, artist, albumImageUrl }
};

export const getTrack = async () => {
    const { access_token } = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    if (response.status === 204) {
        const playing = false;
        const { title, artist, albumImageUrl } = await getRecentlyPlayed();
        return { playing, title, artist, albumImageUrl };
    } else {
        const data = await response.json();
    
        const track: PlayingTrack = await data;
        const playing = track?.is_playing;
        const title = track?.item?.name
        const artist = track?.item?.artists?.[0]?.name;
        const albumImageUrl = track?.item?.album?.images?.[0]?.url;
    
        return { playing, title, artist, albumImageUrl }
    }
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();
    const response = await fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });

    const data = await response.json();

    const tracks: TopTrack[] = data.items;
    
    return tracks;
};

export const getTopArtists = async () => {
    const { access_token } = await getAccessToken();
    const response = await fetch(TOP_ARTISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });

    const data = await response.json();

    const artists: TopArtists[] = data.items;
    
    return artists;
};