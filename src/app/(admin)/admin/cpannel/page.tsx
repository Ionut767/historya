import Link from "next/link";
export default function Cpannel() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/admin/cpannel/personalitati">Personalitati</Link>
      <Link href="/admin/cpannel/orase">Orase</Link>
      <Link href="/admin/cpannel/arta">Artas</Link>
    </div>
  );
}
