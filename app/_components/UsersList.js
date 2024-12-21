import { fetchAllUsers } from "../_lib/data-service";
import UserCard from "./UserCard";

export default async function UsersList() {
  const users = await fetchAllUsers();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
