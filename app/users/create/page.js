import { Suspense } from "react";

import UserForm from "@/app/_components/UserForm";

//Refresh data affter 36 sec
export const revalidate = 3600;

export const metadata = {
  title: "Users",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-8xl text-primary-50 my-10 tracking-tight font-normal">
        Create new user.
      </h1>

      <Suspense>
        <UserForm />
      </Suspense>
    </div>
  );
}
