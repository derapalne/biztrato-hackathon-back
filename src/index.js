import express from "express";

import { config } from "./utils";
import { teamsRouter, matchesRouter } from "./routes";

const PORT = config.PORT;

const app = express();

app.use("/api/teams", teamsRouter);
app.use("/api/matches", matchesRouter);


app.use((req, res, next) => {
    res.status(404).json({error: "not found"});
})


const server = app.listen(PORT, () => console.log("Servidor escuchando en puerto", PORT));
server.on("error", (error) => console.log(error));
