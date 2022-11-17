import { Router } from "express";

import { getMatches } from "../controllers";

const router = Router();

router.get("/", getMatches);

export { router as matchesRouter };
