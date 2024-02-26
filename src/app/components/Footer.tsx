import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className=" shadow w-full bg-black">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center"
          >
            <Logo />
          </Link>
          <ul className="flex flex-wrap justify-center sm:justify-normal items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 last:me-0 last:md:me-0">
            {[
              { id: "informatii", name: "Informatii" },
              { id: "privacy-policy", name: "Privacy Policy" },
              { id: "licensing", name: "Licensing" },
              { id: "contact", name: "Contact" },
            ].map((bg) => (
              <li key={bg.id}>
                <Link
                  href={"/" + bg.id}
                  className="hover:underline me-4 md:me-6"
                >
                  {bg.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Historya ™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
