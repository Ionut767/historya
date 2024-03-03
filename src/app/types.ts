import { ObjectId } from "mongodb";

export type Author = {
  _id: ObjectId;
  avatar: string;
  name: string;
  image: string;
  age: number;
  birthdate: string;
  description: string;
  arts: Art[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type Oras = {
  _id: ObjectId;
  name: string;
  description: string;
  subdescription: string;
  image: string;
};
export type Art = {
  _id: ObjectId;
  image: string;
  name: string;
  description?: string;
  age?: string;
};
