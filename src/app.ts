import express from "express";
import Router from "./routes/UserRoute";

const app = express();
app.use(express.json());
app.use("/users", Router); 

export default app;
