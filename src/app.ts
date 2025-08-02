import express from "express";
import userRoutes from "./routes/UserRoute";

const app = express();
app.use(express.json());
app.use("/users", userRoutes); // <<< prefixo aqui

export default app;
