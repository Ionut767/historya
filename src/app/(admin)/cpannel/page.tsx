"use client";
import Ev from "@/app/components/Ev";
import Loading from "@/app/components/Loading";
import { getContactMessages } from "@/app/servercomponents/actions";
import { Mesaj } from "@/app/types";
import { useEffect, useState } from "react";

export default function Cpannel() {
  const [mesaje, setMesaje] = useState<Mesaj[]>([] as Mesaj[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getContactMessages().then((data: any) => setMesaje(data));
    setLoading(false);
  }, [setLoading, setMesaje]);
  return (
    <div className="m-1">
      {loading ? (
        <Loading />
      ) : mesaje?.length < 1 ? (
        <p className="text-center">Se pare că nu există niciun mesaj primit!</p>
      ) : (
        mesaje?.map((mesaj) => (
          <div className="m-1 w-11/12 h-auto bg-zinc-900 border-zinc-800 rounded-lg border-[1px]">
            <p>
              <Ev sb>
                User:{" "}
                <Ev b i>
                  {mesaj.nume || "Anonim"}
                </Ev>
              </Ev>
            </p>
            <p>
              <Ev sb>
                Email:{" "}
                <Ev b i>
                  {mesaj.email || "Anonim"}
                </Ev>
              </Ev>
            </p>
            <p>
              <Ev sb>
                Mesaj:
                <br />{" "}
                <Ev b i>
                  {mesaj.mesaj || "..."}
                </Ev>
              </Ev>
            </p>
          </div>
        ))
      )}
    </div>
  );
}
