"use client";

import { useState, useEffect, useOptimistic } from "react";
import UserCard from "./UserCard";
import { fetchAllUsers } from "../_lib/data-service";
import { deleteUser } from "../_lib/actions";


export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllUsers(page, 10);
        setUsers((prev) => {
          const userMap = new Map();
          // Add existing users to the map
          prev.forEach((user) => userMap.set(user.id, user));
          // Add new users to the map
          data.forEach((user) => userMap.set(user.id, user));
          // Convert map back to an array
          return Array.from(userMap.values());
        });
        setHasMore(data.length === 10);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  const [optimisticBookigns, optimisticDelete] = useOptimistic(
    // Current state
    users,
    // Feature state function
    (currUsers, userId) => {
      return currUsers.filter((user) => user.id !== userId);
    }
  );

  async function handleDelete(userId) {
    optimisticDelete(userId);
    await deleteUser(userId);
  }

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {optimisticBookigns.map((user) => (
          <UserCard user={user} key={user.id} onDelete={handleDelete} />
        ))}
      </div>

      <div className="text-center mt-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : hasMore ? (
          <button
            className="px-4 py-2 bg-primary-600 text-white rounded"
            onClick={loadMore}
          >
            Load More
          </button>
        ) : (
          <p>No more users to load.</p>
        )}
      </div>
    </div>
  );
}
