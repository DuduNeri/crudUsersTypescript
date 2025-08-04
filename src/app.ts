import express from "express";
import Router from "./routes/userRoute";

const app = express();
app.use(express.json());
app.use("/users", Router); 

export default app;
