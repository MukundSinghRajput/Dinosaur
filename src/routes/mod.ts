import { Router } from "express";
import gpt from "./gpt.ts";

const router = new Router()

router.use(gpt)

export default router;