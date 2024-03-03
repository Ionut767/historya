"use client";
import DefTitle from "@/app/components/DefTitle";
import Loading from "@/app/components/Loading";
import NotFound from "@/app/components/NotFound";
import { getArtists } from "@/app/servercomponents/actions";
import { Author, Art } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Arta() {
  const [artisti, setArtisti] = useState<Author[]>([] as Author[]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getArtists().then((data: any) => {
      setArtisti(data);
      setLoading(false);
    });
  }, [setArtisti]);
  return (
    <div className="container min-h-[75vh]">
      {loading ? (
        <Loading />
      ) : artisti.length > 0 && artisti && artisti !== null ? (
        <>
          <DefTitle size={4} alwaysShow>
            Artiștii Italiei Renascentiste
          </DefTitle>
          {artisti.map((artist: Author) => (
            <section
              id={artist._id as unknown as string}
              key={artist.name}
              className=" my-8 py-1 rounded-md bg-zinc-950"
            >
              <Link
                href={"/artisti/" + artist._id}
                className=" flex md:flex-row flex-col w-auto items-center md:w-fit group m-2 bg-zinc-950  transition-colors duration-700 h-fit shadow-lg rounded-lg overflow-hidden "
              >
                <Image
                  src={"https://lh3.googleusercontent.com/d/" + artist.avatar}
                  width={300}
                  height={300}
                  alt={artist.name + " Image"}
                  className="object-cover md:m-2 object-center rounded-full size-40"
                />
                <div className="p-6 bg-zinc-950 text-center">
                  <h2 className="text-2xl font-bold">{artist.name}</h2>
                </div>
              </Link>
              <div
                className={` ${
                  artist.arts.length > 0
                    ? "grid md:grid-cols-3 grid-cols-1"
                    : ""
                } bg-zinc-900 p-2 m-1 rounded-md`}
              >
                {artist.arts.length > 0 ? (
                  artist.arts.map((art: Art) => (
                    <div
                      key={art.name}
                      className="group bg-zinc-950 m-2  transition-colors duration-700 h-fit shadow-lg rounded-lg overflow-hidden"
                    >
                      <Image
                        src={"https://lh3.googleusercontent.com/d/" + art.image}
                        width={300}
                        height={300}
                        alt={art.name + " Image"}
                        className="w-full object-cover object-center"
                      />
                      <div className="p-6 bg-black text-center">
                        <h2 className="text-2xl font-bold text-ellipsis overflow-hidden">
                          {art.name}
                        </h2>
                        <p className="text-ellipsis overflow-hidden">
                          {art.age}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <h2 className="text-2xl text-center font-bold">
                      Operele de artă nu au fost încărcate pentru acest
                      artist...
                    </h2>
                  </div>
                )}
              </div>
            </section>
          ))}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
