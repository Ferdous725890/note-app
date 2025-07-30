import { model, Schema } from "mongoose";

const notSchema = new Schema(
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Note = model("Note", notSchema);