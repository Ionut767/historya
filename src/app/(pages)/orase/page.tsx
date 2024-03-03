"use client";
import Loading from "@/app/components/Loading";
import NotFound from "@/app/components/NotFound";
import { getCitys } from "@/app/servercomponents/actions";
import { Oras } from "@/app/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import DefTitle from "@/app/components/DefTitle";
import Link from "next/link";

export default function Orase() {
  const [orase, setOrase] = useState<Oras[]>([] as Oras[]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getCitys().then((data: any) => {
      setOrase(data);
      setLoading(false);
    });
  }, [setOrase]);
  return (
    <div className="container min-h-[75vh]">
      {loading ? (
        <Loading />
      ) : orase.length > 0 && orase && orase !== null ? (
        <>
          <DefTitle size={4} alwaysShow>
            Artiștii Italiei Renascentiste
          </DefTitle>
          <div className="  flex flex-wrap sm:justify-normal justify-center m-4">
            {orase.map((oras: Oras) => (
              <Link href={"/orase/" + oras.name} key={oras.name}>
                <div className=" group m-2 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-700 h-fit shadow-lg rounded-lg overflow-hidden ">
                  <Image
                    src={"https://lh3.googleusercontent.com/d/" + oras.image}
                    width={300}
                    height={300}
                    alt={oras.name + " Image"}
                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-6 bg-zinc-950 text-center">
                    <h2 className="text-2xl font-bold text-ellipsis overflow-hidden">
                      {oras.name}
                    </h2>
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
