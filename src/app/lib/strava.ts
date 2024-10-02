import { createClient } from "@supabase/supabase-js";

type Stats = {
  recent_runs: {
    count: number,
    distance: number,
    time: {
      hours: number,
      minutes: number,
      seconds: number
    }
  },
  recent_rides: {
    count: number,
    distance: number,
    time: {
      hours: number,
      minutes: number,
      seconds: number
    }
  },
  recent_swims: {
    count: number,
    distance: number,
    time: {
      hours: number,
      minutes: number,
      seconds: number
    }
  },
  total_runs: {
    count: number,
    distance: number,
    time: {
      hours: number,
      minutes: number,
      seconds: number
    }
  },
  total_rides: {
    count: number,
    distance: number,
    time: {
      hours: number,
      minutes: number,
      seconds: number
    }
  },
  total_swims: {
    count: number,
    distance: number,
    time: {
      hours: number,
      minutes: number,
      seconds: number
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
