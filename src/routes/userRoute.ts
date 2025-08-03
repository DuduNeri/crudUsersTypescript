import express, { Request, Response } from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const data = await UserController.create(req.body);
    return res.status(201).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const data = await UserController.getUsers(req.params); 
    return res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Erro desconhecido" });
  }
});

export default router;
