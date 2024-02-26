import Image from "next/image";
import errimage from "@/media/Codul-lui-Michelangelo-Capela-Sixtina.png";
import Link from "next/link";
import Ev from "./Ev";
export default function NotFound() {
  return (
    <div className="w-full h-full justify-center items-center px-8 pt-6 pb-8 mb-4 flex flex-col">
      <Image src={errimage} alt="Error Image!" />
      <div className="mb-4">
        <h1 className="block text-white font-bold mb-2 text-xl text-center">
          Această pagină nu există sau a fost ștearsă!
        </h1>
      </div>
      <p className="mb-6 text-gray-400 text-center text-sm">
        <Ev i sb>
          Va rugăm să{" "}
          <Ev i l b lnk={{ out: false, link: "/contact" }}>
            contactați
          </Ev>{" "}
          in administrator în legătură cu această pagină!
        </Ev>
      </p>
      <p className="mb-6 text-gray-400 text-center">
        <Ev i sb>
          {" "}
          Apăsați pe butonul de mai jos pentru a reveni la pagina principală
        </Ev>
      </p>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Revenire la pagina principala
          </button>
        </Link>
      </div>
    </div>
  );
}
