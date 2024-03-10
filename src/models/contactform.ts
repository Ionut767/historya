import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const contactFormSchema = new Schema(
  {
    _id: { type: ObjectId, required: true },
    nume: { type: String, required: true },
    mesaj: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
let Contact =
  mongoose.models.contact || mongoose.model("contact", contactFormSchema);
export default Contact;
