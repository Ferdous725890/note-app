import express, { Request, Response } from "express"
import { Note } from "../model/node.models";
import { create } from "domain";
export const notRouter = express.Router()


// post route
notRouter.post("/create-not-app", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "mongose",
    tags: {
      label: "database",
    },
    userId : "688b28b9fa142750064f86ae"
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
notRouter.get("/all-note-get", async (req: Request, res: Response) => {
 const notes = await Note.find().populate("userId")
 res.status(200).json({
      success: true,
      message: "Note Updated Successfully",
      data : notes,
    });
 
});


notRouter.patch("/:noteId", async (req: Request, res: Response) => {
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
notRouter.delete("/:noteId", async (req: Request, res: Response) => {
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

