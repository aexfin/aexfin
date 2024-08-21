import querystring from "querystring";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const refresh_token = process.env.REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
export const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
export const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10";

export const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
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
