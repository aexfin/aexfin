import { createClient } from "@supabase/supabase-js";

type Config = {
  pfp: boolean,
  desc: boolean,
  socials: boolean,
  spotify: boolean,
  artists: boolean,
  stats: boolean,
  langs: boolean
}

const defaultConfig: Config = {
    pfp: false,
    desc: false,
    socials: false,
    spotify: false,
    artists: false,
    stats: false,
    langs: false
}

const supabase_url = String(process.env.SUPABASE_URL);
const supabase_key = String(process.env.SUPABASE_KEY);

export const fetchVisibilityConfigFromSupabase = async () => {
    const supabase = createClient(supabase_url, supabase_key);

    const { data, error } = await supabase
        .from("visibility")
        .select("config", { count: "exact" })
        .eq("id", 1);

    if (data && Array.isArray(data) && data.length > 0) {
            const config: Config = data[0].config;
            return config
    } else {
      return defaultConfig
    }
};