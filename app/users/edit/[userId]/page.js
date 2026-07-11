import UpdateUser from "@/app/_components/UpdateUser";
import { getGuestById } from "@/app/_lib/data-service";

export const metadata = {
  title: "Edit User",
};

export default async function Page({ params }) {
  const { userId } = params;

  const currentUser = await getGuestById(userId);

  if (!currentUser) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-accent-400">
          User not found
        </h2>

        <p className="mt-4 text-primary-300">
          The requested user does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Edit User
        </h1>

        <p className="mt-3 text-base sm:text-lg text-primary-300">
          User ID:
          <span className="font-semibold text-accent-400">
            {" "}
            #{userId}
          </span>
        </p>

        <p className="mt-2 text-primary-400">
          Update the users information and permissions.
        </p>
      </div>

      <UpdateUser
        currentUser={currentUser}
        userId={userId}
      />
    </div>
  );
}
