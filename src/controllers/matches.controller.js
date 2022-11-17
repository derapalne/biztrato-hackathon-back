import { getMatchesService } from "../service";

const getMatches = async (req, res) => {
    try {
        const matches = await getMatchesService();
        const sortedGroups = {
            GROUP_A: [],
            GROUP_B: [],
            GROUP_C: [],
            GROUP_D: [],
            GROUP_E: [],
            GROUP_F: [],
            GROUP_G: [],
            GROUP_H: [],
        };
        console.log(matches.resultSet.count);
        for (let m = 0; m < matches.resultSet.count; m++) {
            if (!matches.matches[m].group) continue;
            sortedGroups[matches.matches[m].group].push(matches.matches[m]);
        }
        res.status(200).json(sortedGroups);
    } catch (error) {
        res.status(500).json(error);
    }
};

export { getMatches };
