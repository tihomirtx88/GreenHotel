import { signInAction } from "../_lib/actions";

export const metadata = {
   title: "Login"
};

function SignInButton() {
  return (
   <form action={signInAction} className="w-full">
      <button
        className="
          w-full
          sm:w-auto
          flex
          items-center
          justify-center
          gap-4
          rounded-xl
          border
          border-primary-700
          bg-primary-900
          px-6
          sm:px-8
          py-4
          text-base
          sm:text-lg
          font-semibold
          text-primary-100
          shadow-md
          transition-all
          duration-300
          hover:bg-primary-800
          hover:border-accent-500
          hover:scale-[1.02]
          focus:outline-none
          focus:ring-2
          focus:ring-accent-500
          focus:ring-offset-2
          focus:ring-offset-primary-950
        "
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          className="w-6 h-6"
        />

        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
