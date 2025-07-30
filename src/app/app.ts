import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { notRouter } from "./crontolars/node.crontroler";
import { userRouter } from "./crontolars/user.controler";
const app: Application = express();

app.use(express.json())

app.use('/notes',notRouter)
app.use('/user',userRouter)


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app");
});

export default app;
