import { Schema, model, models } from "mongoose";

// Define the Application schema
const ApplicationSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    coordinates: [String],
    image: { type: String, required: true },
    status: { type: String, default: "pending" },
    user: { type: String },
  },
  {
    timestamps: true,
  }
);

// Initialize the Application model
const Application =
  models.Application || model("Application", ApplicationSchema);

export default Application;
