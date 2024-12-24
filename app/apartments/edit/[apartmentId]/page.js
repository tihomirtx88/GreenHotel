
import { Suspense } from "react";
import UpdateApartment from "@/app/_components/UpdateApartment";

//Refresh data affter 36 sec
export const revalidate = 3600;

export const metadata = {
  title: "Edit Apartment",
};

export default async function Page() {

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Edit Luxury apartment
      </h1>

      <Suspense >
        <UpdateApartment/>
      </Suspense>
    </div>
  );
}
