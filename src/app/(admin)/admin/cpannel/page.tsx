"use client";
import insertArtist from "@/app/servercomponents/actions";
import { useFormState } from "react-dom";

export default function ArtistForm() {
  const [state, formAction] = useFormState(insertArtist, { success: false });

  return (
    <form action={formAction} className="space-y-4 pt-12 text-black">
      <input
        required
        type="text"
        name="avatar"
        placeholder="avatar"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        required
        type="text"
        name="image"
        placeholder="Image URL"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        required
        type="number"
        name="age"
        placeholder="Age"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        required
        type="string"
        name="birthdate"
        placeholder="Birthdate"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        required
        name="description"
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Save Artist
      </button>
      {state.success && <p className="text-green-500">Artist inserted</p>}
    </form>
  );
}
