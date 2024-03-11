"use client";
import Loading from "@/app/components/Loading";
import { insertContactFormData } from "@/app/servercomponents/actions";
import { signIn, useSession } from "next-auth/react";
import { useFormState, useFormStatus } from "react-dom";

export default function Contact() {
  const { data: session, status } = useSession();
  const [state, formAction] = useFormState(insertContactFormData, {
    success: false,
  });

  function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="shadow bg-gray-700 hover:bg-gray-600 shadow-outline outline-none text-gray-300 font-bold py-2 px-4 rounded"
        aria-disabled={pending}
      >
        Trimite
      </button>
    );
  }

  return status == "loading" ? (
    <Loading />
  ) : (
    <div
      className="container min-h-[75vh] flex flex-col items-center justify-center"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      {/* Form here */}
      <form
        className="w-full max-w-lg sm:mb-0 mb-10 rounded-lg shadow-md p-6 text-gray-300 bg-zinc-950 "
        action={async (FormData: FormData) => formAction(FormData)}
      >
        <h1 className="text-3xl text-center font-bold mb-5 sm:mt-0 mt-4">
          {" "}
          Formular de contact
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div
            className={`w-full ${
              !session?.user?.email && "md:w-1/2"
            } px-3 mb-6 md:mb-0`}
          >
            <label
              className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
              htmlFor="nume"
            >
              Nume
            </label>
            <input
              className="appearance-none block w-full text-gray-300 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none bg-gray-700"
              id="nume"
              name="nume"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          {!session?.user?.email && (
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight outline-none bg-gray-700 :border-gray-600"
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
          )}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
              htmlFor="mesaj"
            >
              Mesaj
            </label>
            <textarea
              className=" no-resize appearance-none block w-full text-gray-300 border  rounded py-3 px-4 mb-3 leading-tight outline-none bg-gray-700 border-gray-600 h-48 resize-none"
              id="mesaj"
              name="mesaj"
              defaultValue={""}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-2/3">
            {!state.success ? (
              <SubmitButton />
            ) : (
              <p className="text-green-500 w-full">
                Mesajul a fost trimis cu succes!
              </p>
            )}
          </div>
          <div className="md:w-1/4"></div>
        </div>
      </form>
    </div>
  );
}
