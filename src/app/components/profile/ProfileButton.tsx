"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileButton() {
  const { data: session } = useSession();
  return (
    <>
      {session && session.user?.image ? (
        <img
          src={session.user?.image}
          alt="profile"
          className="w-10 h-10 rounded-full"
          onClick={() => signOut()}
        />
      ) : (
        <button
          className=" rounded-sm px-1 bg-red-950 hover:bg-red-900 text-white"
          onClick={() => signIn("google")}
        >
          Sign In
        </button>
      )}
    </>
  );
}
