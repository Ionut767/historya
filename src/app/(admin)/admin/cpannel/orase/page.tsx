"use client";
import { insertCity } from "@/app/servercomponents/actions";
import { useFormState } from "react-dom";

export default function OraseForm() {
  const [state, formAction] = useFormState(insertCity, { success: false });

  return (
    <form action={formAction} className="space-y-4 pt-12 text-black">
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
      <textarea
        required
        name="description"
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <textarea
        required
        name="subdescription"
        placeholder="Sub Description"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Save City
      </button>
      {state.success && <p className="text-green-500">Artist inserted</p>}
    </form>
  );
}
