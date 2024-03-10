import Link from "next/link";

export default function Pagini() {
  const pagini = ["Personalitati", "Orase", "Arta", "Statistici"];
  return (
    <div className="w-full md:w-1/4 bg-zinc-950 border-zinc-800 border-[1px] rounded-lg flex flex-col space-y-4 p-5 h-full">
      <div className="border-b border-zinc-800 pb-1">
        <h1 className="text-2xl ">Pagini Cpannel</h1>
        <p className=" pl-3">- {pagini.length + 1} Pagini Disponibile -</p>
      </div>
      <Link href="/cpannel">Home</Link>
      {pagini.map((page) => (
        <Link href={`/cpannel/${page.toLowerCase()}`} key={page}>
          {page}
        </Link>
      ))}
    </div>
  );
}
