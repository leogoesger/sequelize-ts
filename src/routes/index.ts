import { Router } from "express";

import testRoutes from "./tests";

const router = Router();

router.use("/api/test", testRoutes);

export default router;
