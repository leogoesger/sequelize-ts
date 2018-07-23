import { Router } from "express";

import testRoutes from "./tests";
import testRoutes2 from "./test2";

const router = Router();

router.use("/api/test", testRoutes);
router.use("/api/test2", testRoutes2);

export default router;
