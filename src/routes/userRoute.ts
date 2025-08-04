import express, { Request, Response } from "express";
import UserController from "../controllers/userController";

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

router.get("/", async(req: Request, res: Response)=>{
   try {
    const getAll = await UserController.getAllUsers(req.body);
    return res.status(200).json(getAll);
   } catch (error) {
    console.log("Erro detalhado:", error)
    return res.status(500).json({ error: "Erro ao buscar usuários" });
   }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await UserController.updateUser({ id, ...req.body });

    if ("error" in result) {
      return res.status(result.status || 400).json({ error: result.error });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro na atualização do usuário" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await UserController.deleteUser({ id });

    if ("error" in result) {
      return res.status(result.status || 400).json({ error: result.error });
    }

    return res.status(200).json(result); 
  } catch (error) {
    console.log("Erro detalhado:", error);
    return res.status(500).json({ error: "Erro ao deletar o usuário" });
  }
});



export default router;
