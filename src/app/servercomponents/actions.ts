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
export async function getArtists() {
  await dbConnect();
  const artists = await Personalitati.find().lean();
  // Convert each artist document into a plain JavaScript object
  const plainArtists = artists.map((artist) => {
    return {
      _id: artist._id.toString(),
      avatar: artist.avatar,
      name: artist.name,
      image: artist.image,
      age: artist.age,
      birthdate: artist.birthdate,
      description: artist.description,
      arts: artist.arts,
      createdAt: artist.createdAt,
      updatedAt: artist.updatedAt,
      __v: artist.__v,
    };
  });
  return plainArtists;
}