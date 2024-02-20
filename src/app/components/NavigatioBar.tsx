"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
export default function NavigationBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="border-gray-200 bg-black fixed w-full z-[51] md:opacity-70 opacity-100 hover:opacity-100 transition-opacity duration-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {/*Buttons list */}
            {["About", "Services", "Pricing", "Contact"].map((bp) => (
              <li key={bp} className="cursor-pointer hover:animate-pulse">
                <Link
                  href="/#"
                  className="block py-2 px-3 text-whiterounded md:bg-transparent md:p-0 text-white"
                >
                  {bp}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
