import { Router } from "express";

const router = Router();

router.post("/sum", require("./sum").default);

export default router;
