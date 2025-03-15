// models/Application.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const ApplicationSchema = new Schema(
  {
    company: {
      type: String,
    },
    mineral: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Application =
  mongoose.models.Application || model("Application", ApplicationSchema);

export default Application;
