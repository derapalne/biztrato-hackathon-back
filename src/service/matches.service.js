import axios from "axios";
import { config } from "../utils";

const getMatchesService = async () => {
    const { data } = await axios.get("https://api.football-data.org/v4/competitions/WC/matches", {
        headers: {
            "X-Auth-Token": config.FOOTBALL_API_KEY,
        },
    });
    return data;
};

export { getMatchesService };
