import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileform";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Profile page",
};

export default async function Page() {
   const session = await auth();
  const quest = await getGuest(session?.user?.email);

  if (!quest) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-accent-400">
          Guest profile not found
        </h2>

        <p className="mt-4 text-primary-300">
          Please sign in again or contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">

      <div className="mb-8">

        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Update your guest profile
        </h1>

        <p className="mt-4 text-base sm:text-lg text-primary-300 leading-7">
          Providing the following information will make your check-in process
          faster and smoother. We look forward to welcoming you!
        </p>

      </div>

      <UpdateProfileForm quest={quest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          defaultCountry={quest.nationality}
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        />
      </UpdateProfileForm>

    </div>
  );
}
