import mongoose, { Schema } from "mongoose";
const PersonalitatiSchema = new Schema(
  {
    name: String,
    image: String,
    age: String,
    birthdate: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
let Personalitati =
  mongoose.models.personalitati ||
  mongoose.model("personalitati", PersonalitatiSchema);
export default Personalitati;
