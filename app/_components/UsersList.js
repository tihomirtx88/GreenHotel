"use client"; 

import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { fetchAllUsers } from "../_lib/data-service";

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
          setUsers((prev) => [...prev, ...data]); 
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

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
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
