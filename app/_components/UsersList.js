"use client";

import { useState, useEffect, useOptimistic } from "react";
import UserCard from "./UserCard";
import { fetchAllUsers } from "../_lib/data-service";
import { deleteUser } from "../_lib/actions";


export default function UsersList({search}) {
 const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setUsers([]);
    setPage(1);
  }, [search]);

  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);

      try {
        const data = await fetchAllUsers(page, 10, search);

        setUsers((prev) => {
          const map = new Map();

          prev.forEach((user) => map.set(user.id, user));
          data.forEach((user) => map.set(user.id, user));

          return [...map.values()];
        });

        setHasMore(data.length === 10);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();
  }, [page, search]);

  function loadMore() {
    if (!isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }

  const [optimisticUsers, optimisticDelete] = useOptimistic(
    users,
    (currentUsers, userId) =>
      currentUsers.filter((user) => user.id !== userId)
  );

 async function handleDelete(userId) {
  optimisticDelete(userId);
  await deleteUser(userId);

  setUsers((prev) => prev.filter((user) => user.id !== userId));
}

  if (!isLoading && optimisticUsers.length === 0)
    return (
      <div className="py-16 text-center">
        <p className="text-xl text-primary-400">
          No users found.
        </p>
      </div>
    );

  return (
    <div className="space-y-10">

      {/* Cards */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
          lg:gap-8
        "
      >
        {optimisticUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Footer */}

      <div className="flex justify-center">

        {isLoading ? (
          <div className="flex items-center gap-3 py-4">

            <div className="h-5 w-5 rounded-full border-2 border-accent-500 border-t-transparent animate-spin" />

            <span className="text-primary-300">
              Loading users...
            </span>

          </div>
        ) : hasMore ? (
          <button
            onClick={loadMore}
            className="
              rounded-lg
              bg-accent-500
              px-6
              py-3

              font-semibold
              text-primary-900

              shadow-md

              transition-all
              duration-300

              hover:bg-accent-600
              hover:scale-[1.02]
            "
          >
            Load More Users
          </button>
        ) : (
          <p className="text-primary-400 text-center">
            You have reached the end of the list.
          </p>
        )}
      </div>
    </div>
  );
}
