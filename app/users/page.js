import { Suspense } from "react";
import UsersList from "../_components/UsersList";
import Spinner from "../_components/Spinner";
import Search from "../_components/Search";
import Sort from "../_components/Sort";

export const metadata = {
  title: "Creating user",
};

export default async function Page({ searchParams }) {
  const search = searchParams?.search ?? "";
  const sort = searchParams?.sort ?? "";

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

      <div className="flex justify-end mb-8">
        <Search placeholder="Search users..." />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-8">
        <Search placeholder="Search users..." />

        <Sort
          options={[
            {
              value: "name-asc",
              label: "Name A-Z",
            },
            {
              value: "name-desc",
              label: "Name Z-A",
            },
            {
              value: "email",
              label: "Email",
            },
          ]}
        />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <Spinner />
          </div>
        }
      >
        <UsersList search={search} sort={sort}/>
      </Suspense>
    </div>
  );
}
