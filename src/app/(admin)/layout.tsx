import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { getServerSession } from "next-auth";
import NavigationBar from "../components/NavigatioBar";
import SessionProvider from "../components/SessionProvider";
import Pagini from "./components/pagini";
import Ev from "../components/Ev";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Historya",
  description:
    "Un proiect realizat pentru concursul Istorie și Societate în Dimensiune Virtuală",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <div
      className=" container min-h-[75vh] flex md:flex-row flex-col"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <Pagini />
      <div className="flex flex-col md:w-3/4 w-full mb-4 md:mb-0 md:mr-4 bg-zinc-950 p-4 rounded-lg shadow-lg border-zinc-800 border-[1px] md:my-0 my-1 md:mx-1 h-full">
        <div className="flex flex-col text-center border-b border-zinc-800 pb-1">
          <h1 className="text-3xl font-bold text-white">Cpannel</h1>
          <p>
            - Bine ai venit <Ev b>{session?.user?.name || "Admin"}</Ev>! -
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
