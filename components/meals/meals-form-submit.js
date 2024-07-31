"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="border-0 px-3 py-3 border-none bg-gradient-to-r from-[#f9572a] to-[#ff8a05]
                text-[#ffffff] rounded-sm cursor-pointer text-xl shadow-actionShadow hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]"
      type="submit"
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
