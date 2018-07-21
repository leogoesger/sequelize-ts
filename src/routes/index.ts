import { Router } from "express";

import { testRoutes } from "./apiRoutes";

const router = Router();

router.use("/api/test", testRoutes);

export default router;
