import { Schema, model, models } from "mongoose";

// Define the Deposit schema
const DepositsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: [String],
  image: { type: String, required: true },
});

// Initialize the Deposit model
const Deposit = models.Deposit || model("Deposit", DepositsSchema);

export default Deposit;
