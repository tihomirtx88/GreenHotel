import { Suspense } from "react";
import UsersList from "../_components/UsersList";
import Spinner from "../_components/Spinner";
import Search from "../_components/Search";
import RoleFilter from "../_components/RoleFilter";

export const metadata = {
  title: "Creating user",
};

export default async function Page({ searchParams }) {
  const search = searchParams?.search ?? "";
  const sort = searchParams?.sort ?? "";
  const role = searchParams?.role ?? "all";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400">
          All Users
        </h1>

        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-8 text-primary-300">
          View, edit and manage all registered users. You can update user
          information, change permissions or remove accounts when necessary.
        </p>
      </div>

      {/* Users */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <Search placeholder="Search users..." />

        <RoleFilter />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <Spinner />
          </div>
        }
      >
        <UsersList search={search} sort={sort} role={role} />
      </Suspense>
    </div>
  );
}
