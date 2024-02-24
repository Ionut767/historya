"use client";
import DefText from "@/app/components/DefText";
import Ev from "@/app/components/Ev";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Oras } from "@/app/types";
import { getCity } from "@/app/servercomponents/actions";
import Image from "next/image";

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
  });
  return (
    <main className="container min-h-screen flex items-center flex-col">
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
          <DefText
            title={oras.name}
            subtitle={oras.subdescription}
            titlesize={6}
          >
            <Ev i>{oras.description}</Ev>
          </DefText>
          <Image
            src={"https://lh3.googleusercontent.com/d/" + oras.image}
            alt={oras.name}
            className=" mt-7"
            width={500}
            height={500}
          />
        </>
      )}
    </main>
  );
}
