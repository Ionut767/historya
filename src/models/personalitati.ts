import mongoose, { Schema } from "mongoose";

const ArtSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
});

const PersonalitatiSchema = new Schema(
  {
    avatar: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    age: { type: Number, required: true },
    birthdate: { type: String, required: true },
    description: { type: String, required: true },
    arts: { type: [ArtSchema], required: false },
  },
  {
    timestamps: true,
  }
);

let Personalitati =
  mongoose.models.personalitati ||
  mongoose.model("personalitati", PersonalitatiSchema);

export default Personalitati;
