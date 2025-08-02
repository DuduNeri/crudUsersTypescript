import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = await UserController.create(req.body);
    return res.status(201).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});
