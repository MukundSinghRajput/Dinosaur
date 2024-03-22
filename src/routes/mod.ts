import { Router } from "express";
import start from "./index.ts";

const router = new Router()

router.use(start)

export default router;
