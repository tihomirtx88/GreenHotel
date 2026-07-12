import { redirect } from "next/navigation";
import { auth } from "../_lib/auth";
import { getGuest } from "../_lib/data-service";

export const metadata = {
  title: "Admin panel page",
};

export default async function Page() {
  const session = await auth();

  let guest = null;

  if (session?.user?.email) {
    guest = await getGuest(session.user.email);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Welcome back,
          <span className="block mt-2 text-primary-100">
            {session?.user?.name}
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-primary-300 leading-7">
          Manage apartments, reservations and users from your administration
          dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="rounded-xl border border-primary-800 bg-primary-900 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-accent-500 mb-2">
            Apartments
          </h3>

          <p className="text-primary-300">
            Create, edit and manage all hotel apartments.
          </p>
        </div>

        <div className="rounded-xl border border-primary-800 bg-primary-900 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-accent-500 mb-2">
            Reservations
          </h3>

          <p className="text-primary-300">
            Review and manage customer reservations.
          </p>
        </div>

        <div className="rounded-xl border border-primary-800 bg-primary-900 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-accent-500 mb-2">Users</h3>

          <p className="text-primary-300">
            Add new users and manage existing accounts.
          </p>
        </div>
      </div>
    </div>
  );
}
