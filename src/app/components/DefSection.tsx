import Image from "next/legacy/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default function DefSection({
  children,
  title,
  subtitle,
  imagelink,
  imgTitle,
  reverse,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imagelink: StaticImport;
  imgTitle: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`container ${
        reverse ? "sm:flex-row" : "sm:flex-row-reverse"
      } mx-auto flex flex-col items-center px-8 py-16 sm:px-12`}
    >
      <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:px-4 md:px-16">
        <Image
          alt="Hanging out with friends"
          className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
          src={imagelink}
          title={imgTitle}
          priority
        />
      </div>
      <div className="mx-4 w-full text-center sm:w-1/2 sm:text-left">
        <h1 className="mb-1 text-3xl font-bold leading-tight md:text-4xl text-center">
          {title}
        </h1>
        <p className=" mb-10 text-gray-100 text-center font-semibold">
          {subtitle}
        </p>
        <span className="mb-2 leading-relaxed text-slate-100 ">{children}</span>
      </div>
    </div>
  );
}
