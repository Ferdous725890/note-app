import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();

app.use(express.json());

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
    label: { type: String, require: true },
    color: { type: String, default: "Gray" },
  },
},
{
  versionKey : false,
  timestamps :true,
}
);

const Note = model("Note", notSchema);

// post route
app.post("/create-not-app", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "mongose",
    tags: {
      label: "database",
    },
  });

  //save file path
  await myNote.save();

  res.status(201).json({
    success: true,
    message: "Note created Successfully",
    note: myNote,
  });
});

//----UPDATE
app.patch("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  console.log(noteId);
  const updatedBody = req.body;

  try {
    const note = await Note.findByIdAndUpdate(noteId, updatedBody);

    console.log(note);

    res.status(200).json({
      success: true,
      message: "Note Updated Successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

//---Deleted
app.delete("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  console.log(noteId);

  try {
    const note = await Note.findByIdAndDelete(noteId);
    console.log(note);
    res.status(200).json({
      success: true,
      message: "Note Deleted Successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app");
});

export default app;
