import testimg from "@/media/Mona_Lisa,_by_Leonardo_da_Vinci.jpg";
import DefSection from "../components/DefSection";
import Link from "next/link";
import Ev from "../components/Ev";
import { Oras } from "../types";
export default function Orase({
  dataOrase,
  loadingState,
}: {
  dataOrase: Oras[];
  loadingState: boolean;
}) {
  return (
    <section
      className={`container sm:flex-row
      mx-auto flex flex-col items-center px-8 py-16 sm:px-12`}
    >
      <DefSection
        title={"Marile Orașe Renascentiste"}
        subtitle={"- din Italia -"}
        imagelink={testimg}
        reverse
        imgTitle={"Mona Lisa - 1503 -  Leonardo da Vinci"}
      >
        <ul className="list-disc text-gray-200 font-serif">
          {loadingState
            ? [...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse w-full h-16 my-3 bg-zinc-950 rounded-md flex items-end justify-center"
                >
                  <div className=" w-[99%] h-[1px] bg-slate-600 rounded-md" />
                </div>
              ))
            : dataOrase.slice(0, 5).map((oras, _) => (
                <Link
                  href={`/orase/${oras.name}`}
                  key={oras.name}
                  className=" group-hover:animate-pulse"
                >
                  <li className="group flex flex-col my-2 py-2 px-4 items-start opacity-70 duration-200 hover:opacity-100 hover:text-yellow-300 cursor-pointer space-x-2">
                    <Ev size={6} b>
                      {oras.name}: {oras.subdescription}
                    </Ev>
                    <hr className="w-full h-[2px] bg-gray-900 my-2" />
                  </li>
                </Link>
              ))}
        </ul>
      </DefSection>
    </section>
  );
}
