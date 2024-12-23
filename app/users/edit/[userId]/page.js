import UpdateUser from "@/app/_components/UpdateUser";
import { getGuestById } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { userId } = params;
  const currentUser = await getGuestById(userId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit User #{userId}
      </h2>
      <UpdateUser userId={userId} currentUser={currentUser}/>

    </div>
  );
}
