import express, { Request, Response } from "express"
import { User } from "../model/user.model";
export const userRouter = express.Router()

// post route
userRouter.post("/create-user", async (req: Request, res: Response) => {


const body = req.body
console.log(body) 
const user = User.create(body)
console.log(user)
  res.status(201).json({
    success: true,
    message: "User created Successfully",

  });
});

//----UPDATE
userRouter.patch("/:usereId", async (req: Request, res: Response) => {
  const usereId = req.params.usereId;
  console.log(usereId);
  const updatedBody = req.body;

  try {
    const user = await User.findByIdAndUpdate(usereId, updatedBody);

    console.log(user);

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

//---Deleted
userRouter.delete("/:usereId", async (req: Request, res: Response) => {
  const usereId = req.params.usereId;
  console.log(usereId);

  try {
    const user = await User.findByIdAndDelete(usereId);
    console.log(user);
    res.status(200).json({
      success: true,
      message: "Note Deleted Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
