import testimg from "@/media/Mona_Lisa,_by_Leonardo_da_Vinci.jpg";
import DefSection from "../components/DefSection";
import Link from "next/link";
import Ev from "../components/Ev";
import { Oras } from "../types";
export default function Orase({ dataOrase }: { dataOrase: Oras[] }) {
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
        <ul className="list-disc text-gray-700 font-serif">
          {dataOrase.map((oras, _) => (
            <Link
              href={`/orase/${oras.name}`}
              key={oras.name}
              className=" group-hover:animate-pulse"
            >
              <li className="group flex flex-col my-2 py-2 px-4 items-start opacity-70 duration-200 hover:opacity-100 hover:text-white cursor-pointer space-x-2">
                <Ev size={6} b>
                  {oras.name}:{oras.subdescription}
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
