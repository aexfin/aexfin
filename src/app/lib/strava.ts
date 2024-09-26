import { createClient } from "@supabase/supabase-js";

type Stats = {
  last_run: {
    distance: Number,
    time: {
      hours: Number,
      minutes: Number,
      seconds: Number
    }
  },
  last_ride: {
    distance: Number,
    time: {
      hours: Number,
      minutes: Number,
      seconds: Number
    }
  },
  total_run: {
    count: Number,
    distance: Number,
    time: {
      hours: Number,
      minutes: Number,
      seconds: Number
    }
  },
  total_ride: {
    count: Number,
    distance: Number,
    time: {
      hours: Number,
      minutes: Number,
      seconds: Number
    }
  }
}

const supabase_url = String(process.env.SUPABASE_URL);
const supabase_key = String(process.env.SUPABASE_KEY);

export const fetchFromSupabase = async () => {
    const supabase = createClient(supabase_url, supabase_key);

    const { data, error } = await supabase
        .from("strava_data")
        .select()
        .eq("id", 1);

    if (data && Array.isArray(data) && data.length > 0) {
            const stats: Stats = data[0].data;
            return stats
    }
};
