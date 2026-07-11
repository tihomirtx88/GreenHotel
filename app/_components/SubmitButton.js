"use client"

import { useFormStatus } from "react-dom";

export function SubmitButton({children, pendingLabel}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        inline-flex
        items-center
        justify-center
        gap-3

        w-full
        sm:w-auto

        rounded-lg

        bg-accent-500

        px-6
        sm:px-8

        py-3
        sm:py-4

        text-base
        sm:text-lg

        font-semibold

        text-primary-900

        shadow-md

        transition-all
        duration-300

        hover:bg-accent-600
        hover:scale-[1.02]

        disabled:cursor-not-allowed
        disabled:bg-gray-500
        disabled:text-gray-300
        disabled:hover:scale-100

        focus:outline-none
        focus:ring-2
        focus:ring-accent-400
      "
    >
      {pending && (
        <svg
          className="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-30"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            className="opacity-90"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}

      {pending ? pendingLabel : children}
    </button>
  );
}
