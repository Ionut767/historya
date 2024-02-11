import testimg from "@/media/Mona_Lisa,_by_Leonardo_da_Vinci.jpg";
import DefSection from "../components/DefSection";
import Link from "next/link";
import Ev from "../components/Ev";
export default function Orase() {
  const dataOrase = [
    { name: "Florența", link: "/orase/florenta" },
    { name: "Roma", link: "/orase/roma" },
    { name: "Veneția", link: "/orase/venetia" },
    { name: "Milano", link: "/orase/milano" },
    { name: "Napoli", link: "/orase/napoli" },
  ];
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
          {dataOrase.map((oras, key) => (
            <li
              key={oras.name}
              className=" flex flex-col my-2 py-2 px-4 items-start bg-zinc-950 opacity-70 hover:opacity-100 hover:text-white cursor-pointer space-x-2 rounded-lg"
            >
              <Ev size={4} b>
                {key + 1}. {oras.name}
              </Ev>
              <Link href={oras.link}>
                <Ev i sb>
                  - Citește mai multe -
                </Ev>
              </Link>
              <hr className="w-full h-[2px] bg-gray-900 my-2" />
            </li>
          ))}
        </ul>
      </DefSection>
    </section>
  );
}
