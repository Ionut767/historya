import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const OraseSchema = new Schema(
  {
    _id: { type: ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    subdescription: { type: String, required: false },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
let Orase = mongoose.models.orase || mongoose.model("orase", OraseSchema);
export default Orase;
