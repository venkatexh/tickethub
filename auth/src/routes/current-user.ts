import express from "express";
import { Request, Response } from "express";
import { currentUser } from "@tickethub-dev/th-common";

const router = express.Router();

router.get(
  "/api/users/current-user",
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
