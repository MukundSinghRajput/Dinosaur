import { Router } from "express";
import { Request, Response } from "express";

const router = new Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Dinosaur API!");
});

export default router;