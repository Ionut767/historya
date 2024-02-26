"use server";
import dbConnect from "@/libs/connectToDB";
import Orase from "@/models/orase";
import Personalitati from "@/models/personalitati";
import { ObjectId } from "mongodb";
// Insert Content
export async function insertArtist(prevState: any, formData: FormData) {
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
    _id: new ObjectId(),
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
export async function insertCity(prevState: any, formData: FormData) {
  await dbConnect();
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    subdescription: formData.get("subdescription"),
    image: formData.get("image"),
  };
  const city = new Orase({
    _id: new ObjectId(),
    name: data.name,
    description: data.description,
    subdescription: data.subdescription,
    image: data.image,
  });
  try {
    await city.save();
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
export async function addArt(prevState: any, formData: FormData) {
  await dbConnect();
  const data = {
    _id: new ObjectId().toString(),
    image: formData.get("image"),
    name: formData.get("name"),
    description: formData.get("description"),
    age: formData.get("age"),
  };
  const artistId = formData.get("artistId");
  const artist = await Personalitati.findById(artistId);
  if (!artist) {
    throw new Error("No artist found with the given id");
  }
  artist.arts.push(data);
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

// Get Content
export async function getArtists() {
  await dbConnect();
  try {
    const artists = (await Personalitati.find().lean()).map((artist) => {
      return {
        _id: (artist._id as ObjectId).toString(),
        avatar: artist.avatar,
        name: artist.name,
        image: artist.image,
        age: artist.age,
        birthdate: artist.birthdate,
        description: artist.description,
        arts: artist.arts.map((art: any) => ({
          ...art,
          _id: art._id.toString(),
        })),
        createdAt: artist.createdAt.toISOString(),
        updatedAt: artist.updatedAt.toISOString(),
        __v: artist.__v,
      };
    });
    return artists;
  } catch (e) {
    return null;
  }
}
export async function getArtist(id: string) {
  await dbConnect();
  try {
    const artist = await Personalitati.findOne({ _id: id })
      .lean()
      .then((artist: any) => {
        return {
          _id: (artist._id as ObjectId).toString(),
          avatar: artist.avatar,
          name: artist.name,
          image: artist.image,
          age: artist.age,
          birthdate: artist.birthdate,
          description: artist.description,
          arts: artist.arts.map((art: any) => ({
            ...art,
            _id: art._id.toString(),
          })),
          createdAt: artist.createdAt.toISOString(),
          updatedAt: artist.updatedAt.toISOString(),
          __v: artist.__v,
        };
      });
    return artist;
  } catch (e) {
    return null;
  }
}
export async function getCitys() {
  await dbConnect();
  const cities = (await Orase.find().lean()).map((city) => {
    return {
      _id: (city._id as ObjectId).toString(),
      name: city.name,
      description: city.description,
      subdescription: city.subdescription,
      image: city.image,
    };
  });
  return cities;
}
export async function getCity(name: string) {
  await dbConnect();
  try {
    const city: any = await Orase.findOne({ name: name }).lean();
    return {
      ...city,
      _id: (city._id as ObjectId).toString(),
    };
  } catch (error) {
    return null;
  }
}
