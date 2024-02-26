import Image from "next/legacy/image";
import AImage from "@/media/bannerbg.jpg";
import { redirect } from "next/navigation";
import Link from "next/link";
export default function Banner() {
  return (
    <section
      className=" h-screen flex items-center relative"
      style={{ fontFamily: "PT Serif, serif" }}
    >
      <div className="h-screen flex overflow-hidden">
        <Image
          className=" opacity-80 relative"
          src={AImage}
          alt={"Background"}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="z-50 absolute sm:top-24 top-36  left-1/2 -translate-x-1/2 w-full flex flex-col text-center">
          <h1
            className="z-50 md:text-6xl text-4xl  font-light
            animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            ARTA RENAȘTERII ITALIENE
          </h1>
          <p
            className="text-xl font-bold mt-4 text-gray-700"
            style={{ fontFamily: "'Lancelot', serif" }}
          >
            O perioadă de revigorare culturală și artistică
          </p>
        </div>
        <div className="z-50 absolute sm:bottom-48 bottom-64 left-1/2 transform -translate-x-1/2">
          <Link href="#content">
            <button className="h-16 w-16 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-black active:scale-90 transition duration-150 ease-in-out animate-bounce shadow-lg hover:shadow-none">
              ↓
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
