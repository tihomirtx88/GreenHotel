
import { Suspense } from "react";
import UsersList from "../_components/UsersList";
import Spinner from "../_components/Spinner";
import SearchUsers from "../_components/SearchUsers";



export const metadata = {
  title: "Creating user",
};

export default async function Page({searchParams }) {

  const search = searchParams?.search ?? "";

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
        <SearchUsers />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <Spinner />
          </div>
        }
      >
        <UsersList search={search}/>
      </Suspense>

    </div>
  );
}
