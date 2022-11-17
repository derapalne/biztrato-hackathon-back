import axios from "axios";
import { config } from "../utils";

const getTeamsService = async () => {
    const { data } = await axios.get("https://api.football-data.org/v4/competitions/WC/teams", {
        headers: {
            "X-Auth-Token": config.FOOTBALL_API_KEY,
        },
    });
    return data;
};

export { getTeamsService };
