import moment from "moment";

export const fetchWakaTime = async() => {
    let response = await fetch("https://wakatime.com/api/v1/users/current/stats/all_time", {
        method: "GET",
        cache: "no-cache",
        headers: {
            Authorization: `Basic ${process.env.WAKATIME_API_KEY}`
        }
    });

    let json = await response.json();
    let data = json?.data;

    const at_best_day = {
        date: moment(data?.best_day?.date).format("DD MMMM YYYY"),
        time: data?.best_day?.text
    };
    const at_daily_average = data?.human_readable_daily_average_including_other_language;
    const at_total_time = data?.human_readable_total_including_other_language;
    
    const languages = data?.languages.slice(0, 3);

    response = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
        method: "GET",
        cache: "no-cache",
        headers: {
            Authorization: `Basic ${process.env.WAKATIME_API_KEY}`
        }
    });

    json = await response.json();
    data = json?.data;

    const tw_best_day = {
        date: moment(data?.best_day?.date).format("DD MMMM YYYY"),
        time: data?.best_day?.text
    };
    const tw_daily_average = data?.human_readable_daily_average_including_other_language;
    const tw_total_time = data?.human_readable_total_including_other_language;


    const stats = {
        tw_daily_average, at_daily_average, tw_total_time, at_total_time, tw_best_day, at_best_day, languages
    };

    return stats;
}