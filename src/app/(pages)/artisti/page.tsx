"use client";
import Loading from "@/app/components/Loading";
import NotFound from "@/app/components/NotFound";
import { getArtists } from "@/app/servercomponents/actions";
import { Author } from "@/app/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import DefTitle from "@/app/components/DefTitle";
import Link from "next/link";

export default function Artisti() {
  const [artisti, setArtisti] = useState<Author[]>([] as Author[]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getArtists().then((data: any) => {
      setArtisti(data);
      setLoading(false);
    });
  });
  return (
    <div className="container min-h-[75vh]">
      {loading ? (
        <Loading />
      ) : artisti.length > 0 && artisti && artisti !== null ? (
        <>
          <DefTitle size={4} alwaysShow>
            Artiștii Italiei Renascentiste
          </DefTitle>
          <div className=" flex md:flex-row flex-col mt-4">
            {artisti.map((artist: Author) => (
              <Link href={"/artisti/" + artist._id} key={artist.name}>
                <div className=" group m-2 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-700 h-fit shadow-lg rounded-lg overflow-hidden ">
                  <Image
                    src={"https://lh3.googleusercontent.com/d/" + artist.avatar}
                    width={300}
                    height={300}
                    alt={artist.name + " Image"}
                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-6 bg-black text-center">
                    <h2 className="text-2xl font-bold">{artist.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
