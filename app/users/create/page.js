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
      <h1
        className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-8xl
text-primary-50
font-normal
tracking-tight
leading-tight
mb-8
"
      >
        Create new user.
      </h1>

      <Suspense>
        <UserForm />
      </Suspense>
    </div>
  );
}
