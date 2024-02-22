"use client";
import DefText from "@/app/components/DefText";
import Ev from "@/app/components/Ev";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Oras } from "@/app/types";
import { getCity } from "@/app/servercomponents/actions";

export default function Orase() {
  const { name } = useParams();
  const nume = decodeURIComponent(name as string);
  const [oras, setOras] = useState<Oras>();
  useEffect(() => {
    getCity(nume as string).then((data: any) => setOras(data));
  });
  if (!oras) return <>Not found!</>;
  return (
    <main className="container">
      <DefText title={oras.name} subtitle={oras.subdescription} titlesize={6}>
        <Ev i>{oras.description}</Ev>
      </DefText>
    </main>
  );
}
