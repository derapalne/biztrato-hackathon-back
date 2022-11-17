import { getTeamsService } from "../service";

const getTeams = async (req, res) => {
    try {
        const response = await getTeamsService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export { getTeams };
