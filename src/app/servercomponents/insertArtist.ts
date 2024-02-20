"use server";
import dbConnect from "@/libs/connectToDB";
import Personalitati from "@/models/personalitati";

export default async function insertArtist(prevState: any, formData: FormData) {
  await dbConnect();
  const data = {
    avatar: formData.get("avatar"),
    name: formData.get("name"),
    image: formData.get("image"),
    age: formData.get("age"),
    birthdate: formData.get("birthdate"),
    description: formData.get("description"),
  };
  const artist = new Personalitati({
    avatar: data.image,
    name: data.name,
    image: data.image,
    age: data.age,
    birthdate: data.birthdate,
    description: data.description,
  });
  console.log(artist);
  try {
    await artist.save();
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
