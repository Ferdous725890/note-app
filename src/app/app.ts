import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { notRouter } from "./crontolars/node.crontroler";
const app: Application = express();

// mongoose schema make
const notSchema = new Schema({
  title: { type: String, require: true, trim: true },
  conten: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "study", "others"],
    default: "personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    label: { type: String, require: true,},
    color : {type : String, default : "Gray"}
  },
});

const Note = model("Note", notSchema);

// post route
app.post("/create-not-app", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning express",
    tags : {
      label : "Database"
    }
  });

  //save file path
  await myNote.save();

  res.status(201).json({
    success: true,
    message: "Note created Successfully",
    note: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app");
});

export default app;
