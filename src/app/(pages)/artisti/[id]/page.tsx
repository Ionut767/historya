"use client";
import { getArtist } from "@/app/servercomponents/actions";
import { Author } from "@/app/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Ev from "@/app/components/Ev";

export default function Artisti() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Author>({} as Author);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getArtist(id as string).then((data: any) => {
      setArtist(data);
      setLoading(false);
    });
  }, []);
  return (
    <main className="container min-h-screen flex md:flex-row flex-col">
      {loading ? (
        <div className="w-full h-full flex-col content-center flex items-center justify-center">
          <div className="flex mb-3 justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
          <Ev i b>
            Se încarcă datele...
          </Ev>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-1/4">
            <Image
              src={"https://lh3.googleusercontent.com/d/" + artist.avatar}
              width={300}
              height={300}
              alt={artist.name + " Image"}
            />
            <h1>
              Nume: <br />
              {artist.name}
            </h1>
            <p>
              Varsta: <br />
              {artist.age}
            </p>
            <p>
              Anul nasterii:
              <br />
              {artist.birthdate}
            </p>
            <p>
              Anul decesului:
              <br />
              {parseInt(
                artist.birthdate.split(" ")?.pop() ?? "Nespecificat",
                10
              ) + artist.age}
            </p>
          </div>
          <div className=" w-3/4 flex flex-col">
            <h1>
              Descriere:
              <br />
            </h1>
            <p>{artist.description}</p>
            <h1>
              Opere de arta:
              <br />
            </h1>
            <div className="flex flex-wrap gap-3">
              {artist.arts.map((art: any) => (
                <div key={art._id}>
                  <Image
                    src={"https://lh3.googleusercontent.com/d/" + art.image}
                    width={300}
                    height={300}
                    alt={art.name + " Image"}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
