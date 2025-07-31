import { model, Schema } from "mongoose";
import { INotes } from "../interfeces/not.interfetch";
import { string } from "zod";

const notSchema = new Schema <INotes>(
  {
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
    userId  : {
      type : Schema.Types.ObjectId,
      ref : "User",
      required : true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Note = model<INotes>("Note", notSchema);