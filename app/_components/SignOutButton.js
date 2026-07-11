import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
        <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="
          group
          flex
          w-full
          items-center
          gap-3
          rounded-lg
          px-4
          py-3
          text-sm
          sm:text-base
          font-medium
          text-primary-200
          transition-all
          duration-300
          hover:bg-red-600
          hover:text-white
          focus:outline-none
          focus:ring-2
          focus:ring-red-500
        "
      >
        <ArrowRightOnRectangleIcon
          className="
            h-5
            w-5
            text-primary-500
            transition-colors
            group-hover:text-white
          "
        />

        <span>Sign Out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
