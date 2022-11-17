import { getMatchesService } from "../service";

const getMatches = async (req, res) => {
    try {
        const data = await getMatchesService();
        const sortedGroups = {};
        for (let m = 0; m < data.resultSet.count; m++) {
            if (!data.matches[m].group) continue;
            if (!sortedGroups[data.matches[m].group]) {
                sortedGroups[data.matches[m].group] = [];
            }
            sortedGroups[data.matches[m].group].push(data.matches[m]);
        }
        res.status(200).json(sortedGroups);
    } catch (error) {
        res.status(500).json(error);
    }
};

export { getMatches };
