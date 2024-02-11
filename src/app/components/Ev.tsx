import Link from "next/link";

export default function Ev({
  children,
  i,
  b,
  sb,
  l,
  c,
  up,
  lnk,
  size,
}: {
  children: React.ReactNode;
  i?: boolean;
  b?: boolean;
  sb?: boolean;
  l?: boolean;
  c?: boolean;
  up?: boolean;
  size?: number;
  lnk?: {
    out: boolean;
    link: string;
  };
}) {
  return (
    <span
      className={`${i && "italic"} ${b && " font-bold"} ${l && "underline"} ${
        c && "cursor-pointer"
      } ${sb && " font-semibold"} ${up && " uppercase"} text-${size} ${
        size && size == 1
          ? "text-sm"
          : size && size == 2
          ? "text-base"
          : size && size == 3
          ? "text-lg"
          : size && size == 4
          ? "text-xl"
          : size && size == 5
          ? "text-2xl"
          : size && size == 6
          ? "text-3xl"
          : ""
      }`}
    >
      {lnk ? (
        <Link target={lnk.out ? "_target" : "_self"} href={lnk.link}>
          {" "}
          {children}{" "}
        </Link>
      ) : (
        children
      )}
    </span>
  );
}
