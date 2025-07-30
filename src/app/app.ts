import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();


app.use(express.json())
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
    label: { type: String, require: true, },
    color: { type: String, default: "Gray" }
  },
});

const Note = model("Note", notSchema);

// NOTE APP POST ROUTE
app.post("/notes/create-not-app", async (req: Request, res: Response) => {
  const body = req.body;

  //  APROCE ONE OF CREATING A DATA
  const myNote = new Note({
    title: "Learning express",
    tags: {
      label: "Database"
    }
  });

  // save file path


  //  APROCE TWO ---

  // const note = await Note.create(body)
  await myNote.save();

  res.status(201).json({
    success: true,
    message: "Note created Successfully",
    note: myNote,
  });
});


// NOTE APP GET ROUTE
app.get("/notes", async (req: Request, res: Response) => {
  const note = await Note.find()
  res.status(201).json({
    success: true,
    message: "Note Find Successfully",
  });
});

// GET-ALL-NOTS


app.get("/notes/:id", async (req: Request, res: Response) => {
  const notId = req.params.notId;
  // APROCE ONE---
  // const note = await Note.findById(notId)
  //APROCE TWO
  const note = await Note.findOne({ _id: notId })
  res.status(201).json({
    success: true,
    message: "Note Find Successfully",
    note
  });
});


// STATE ROUTE

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app");
});

export default app;
