"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Oras } from "@/app/types";
import { getCity } from "@/app/servercomponents/actions";
import Image from "next/image";
import Loading from "@/app/components/Loading";
import NotFound from "@/app/components/NotFound";

export default function Orase() {
  const { name } = useParams();
  const nume = decodeURIComponent(name as string);
  const [oras, setOras] = useState<Oras>({} as Oras);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getCity(nume as string).then((data: any) => {
      setOras(data);
      setLoading(false);
    });
  }, [nume, setOras]);
  return (
    <div className="container min-h-[70vh] flex items-center flex-col">
      {loading ? (
        <Loading />
      ) : oras && oras !== null ? (
        <>
          <div className="w-full md:w-3/4 flex flex-col items-center text-white">
            <Image
              src={"https://lh3.googleusercontent.com/d/" + oras.image}
              alt={oras.name}
              className="rounded-lg shadow-lg mb-4"
              width={500}
              height={500}
            />
            <h1 className="text-6xl font-bold">{oras.name}</h1>
            <p className="mt-2 text-gray-300">{oras.subdescription}</p>
            <p className="mt-2 italic text-gray-300">{oras.description}</p>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
