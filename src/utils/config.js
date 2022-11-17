import "dotenv/config";

export const config = {
    PORT: process.env.PORT || 8080,
    FOOTBALL_API_KEY: process.env.FOOTBALL_API_KEY || "",
};
