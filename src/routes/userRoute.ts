import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/", async (req, res) => {
  console.log("POST /users recebido");
  console.log("Body:", req.body);
  try {
    const user = await userController.create(req.body);
    console.log("Usuário criado:", user);
    res.status(201).json(user);
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error.message);
    res.status(400).json({ message: error.message });
  }
});

export default router;
