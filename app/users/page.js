
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import UsersList from "../_components/UsersList";

//Refresh data affter 36 sec
export const revalidate = 3600;

export const metadata = {
  title: "Users",
};

export default async function Page() {

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        All users
      </h1>

      <Suspense fallback={<Spinner/>}>
        <UsersList/>
      </Suspense>
    </div>
  );
}
