import SignInButton from "../_components/SigninButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">

      <div
        className="
          mt-10
          sm:mt-16

          rounded-2xl
          border
          border-primary-800
          bg-primary-900

          p-8
          sm:p-12

          shadow-lg

          flex
          flex-col
          items-center
          text-center
        "
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Welcome Back
        </h1>

        <p className="mt-5 max-w-xl text-base sm:text-lg leading-7 text-primary-300">
          Sign in with your Google account to manage your reservations,
          update your guest profile and enjoy a faster booking experience.
        </p>

        <div className="mt-10 w-full flex justify-center">
          <SignInButton />
        </div>
      </div>

    </div>
  );
}
