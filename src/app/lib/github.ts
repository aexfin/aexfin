export const fetchGithubProfile = async () => {
    const response = await fetch("https://api.github.com/user", {
        cache: "no-cache",
        method: "GET",
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
    });
    const data = await response.json();
    const username = data?.name;
    const bio = data?.bio;
    const location = data?.location;
    const avatar_url = data?.avatar_url;
    const followers = data?.followers;
    const following = data?.following;
    const public_repos = data?.public_repos;
    const html_url = data?.html_url;

    const profile = {
        username, bio, location, avatar_url, followers, following, html_url, public_repos
    }

    return profile;
}