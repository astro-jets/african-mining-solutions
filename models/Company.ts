import { Schema, model, models } from "mongoose";

// Define the Company schema
const CompanySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  location: [String],
  image: { type: String, required: true },
});

// Initialize the Company model
const Company = models.Company || model("Company", CompanySchema);

export default Company;
