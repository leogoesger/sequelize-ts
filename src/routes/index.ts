import { Router } from "express";

import location from "./location";

const router = Router();

router.use("/api/location", location);

export default router;
