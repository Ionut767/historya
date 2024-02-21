import { ObjectId } from "mongodb";

export type Author = {
  _id: ObjectId;
  avatar: string;
  name: string;
  image: string;
  age: number;
  birthdate: string;
  description: string;
  arts?: {
    image: string;
    name: string;
    description?: string;
    age?: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
