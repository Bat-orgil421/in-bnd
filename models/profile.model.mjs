import mongoose from "mongoose";
import { nanoid } from "nanoid";

const ProfileSchema = new mongoose.Schema(
  {
    _id: { type: String, default: nanoid() },
    profileimg: { type: String },
    createdBy: { type: String, ref: "User" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

export const ProfiletModel = mongoose.model("Profiles", ProfileSchema);
