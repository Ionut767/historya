"use client";
import { getArtist } from "@/app/servercomponents/actions";
import { Author } from "@/app/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";
import NotFound from "@/app/components/NotFound";

export default function Artisti() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Author>({} as Author);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getArtist(id as string).then((data: any) => {
      setArtist(data);
      setLoading(false);
    });
  }, [id]);
  return (
    <div className="container min-h-[75vh] flex md:flex-row flex-col">
      {loading ? (
        <Loading />
      ) : artist && artist !== null ? (
        <>
          <div className="flex flex-col w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 bg-zinc-950 p-4 rounded-lg shadow-lg">
            <Image
              src={"https://lh3.googleusercontent.com/d/" + artist.avatar}
              width={300}
              height={300}
              alt={artist.name + " Image"}
              className="rounded-lg"
            />
            <div className="mt-4 md:w-auto w-full bg-zinc-700 p-2 rounded-lg">
              <h1 className="text-2xl font-bold text-white">
                Nume: <br />
                <span className="font-normal text-gray-300">{artist.name}</span>
              </h1>
              <p className="mt-2 text-white">
                Varsta: <br />
                <span className="font-normal text-gray-300">{artist.age}</span>
              </p>
              <p className="mt-2 text-white">
                Anul nasterii: <br />
                <span className="font-normal text-gray-300">
                  {artist.birthdate}
                </span>
              </p>
              <p className="mt-2 text-white">
                Anul decesului: <br />
                <span className="font-normal text-gray-300">
                  {parseInt(
                    artist.birthdate.split(" ")?.pop() ?? "Nespecificat",
                    10
                  ) + artist.age}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full md:mb-0 mb-10 md:w-3/4 flex flex-col bg-zinc-950 p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white">Descriere:</h1>
            <p className="mt-2 text-gray-300">{artist.description}</p>
            <h1 className="text-2xl font-bold mt-4 text-white">
              Opere de arta:
            </h1>
            <div className="flex flex-wrap gap-3 mt-2">
              {artist.arts.map((art: any) => (
                <div
                  key={art._id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <Image
                    src={"https://lh3.googleusercontent.com/d/" + art.image}
                    width={300}
                    height={300}
                    alt={art.name + " Image"}
                    className="rounded-lg md:hover:absolute md:hover:scale-[200%] transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
