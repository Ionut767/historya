import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const ArtSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  age: { type: String, required: false },
});

const PersonalitatiSchema = new Schema(
  {
    _id: { type: ObjectId },
    avatar: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    age: { type: Number, required: true },
    birthdate: { type: String, required: true },
    description: { type: String, required: true },
    arts: { type: [ArtSchema], required: false, default: [] },
  },
  {
    timestamps: true,
  }
);

let Personalitati =
  mongoose.models.personalitati ||
  mongoose.model("personalitati", PersonalitatiSchema);

export default Personalitati;
