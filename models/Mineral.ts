import { Schema, model, models } from "mongoose";

// Define the Mineral schema
const MineralsSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    coordinates: [String],
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Initialize the Mineral model
const Mineral = models.Mineral || model("Mineral", MineralsSchema);

export default Mineral;
