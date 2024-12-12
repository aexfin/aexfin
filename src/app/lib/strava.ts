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

const defaultStats: Stats = {
  recent_runs: {
    count: 0,
    distance: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  recent_rides: {
    count: 0,
    distance: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  recent_swims: {
    count: 0,
    distance: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  total_runs: {
    count: 0,
    distance: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  total_rides: {
    count: 0,
    distance: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  total_swims: {
    count: 0,
    distance: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
};

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
    } else {
      return defaultStats
    }
};
