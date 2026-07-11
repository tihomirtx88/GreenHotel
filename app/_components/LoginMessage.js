import Link from "next/link";

function LoginMessage() {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-primary-800
        bg-primary-900
        p-6
        sm:p-10
        lg:p-12
        shadow-lg
      "
    >
      <div className="max-w-md text-center">
        <h3
          className="
            text-2xl
            sm:text-3xl
            font-semibold
            text-primary-100
            mb-4
          "
        >
          Reserve your apartment
        </h3>

        <p
          className="
            text-base
            sm:text-lg
            text-primary-300
            leading-7
            mb-8
          "
        >
          To make a reservation, please sign in to your account.
          It only takes a few seconds.
        </p>

        <Link
          href="/login"
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-accent-500
            px-6
            py-3
            font-semibold
            text-primary-900
            transition-all
            duration-300
            hover:bg-accent-600
            hover:scale-105
          "
        >
          Login to continue →
        </Link>
      </div>
    </div>
  );
}

export default LoginMessage;
