"use client";
import { addArt, getArtists } from "@/app/servercomponents/actions";
import { Author } from "@/app/types";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function OraseForm() {
  const [state, formAction] = useFormState(addArt, { success: false });
  const [artists, setArtists] = useState<Author[]>();
  useEffect(() => {
    getArtists().then((data: any) => setArtists(data));
  }, []);

  return (
    <form action={formAction} className="space-y-4 pt-12 text-black">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        required
        name="artistId"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {artists &&
          artists?.map((artist) => (
            <option key={artist.name} value={artist._id as unknown as string}>
              {artist.name}
            </option>
          ))}
      </select>
      <input
        required
        type="text"
        name="image"
        placeholder="Image URL"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        required
        name="description"
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        required
        type="text"
        name="age"
        placeholder="Age"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        add art
      </button>
      {state.success && <p className="text-green-500">art inserted</p>}
    </form>
  );
}
