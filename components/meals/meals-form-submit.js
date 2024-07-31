"use client"; // This directive indicates that the component is a client-side component

import { useFormStatus } from "react"; // Importing useFormStatus hook to manage form submission status

// MealsFormSubmit component renders a submit button with dynamic text and disabled state
export default function MealsFormSubmit() {
  const { pending } = useFormStatus(); // Destructuring pending status from useFormStatus

  return (
    <button
      disabled={pending} // Disables the button when the form is in a pending state
      className="border-0 px-3 py-3 border-none bg-gradient-to-r from-[#f9572a] to-[#ff8a05]
                text-[#ffffff] rounded-sm cursor-pointer text-xl shadow-actionShadow hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]"
      type="submit"
    >
      {pending ? "Submitting..." : "Share Meal"}{" "}
      {/* Displays "Submitting..." while pending, otherwise "Share Meal" */}
    </button>
  );
}
