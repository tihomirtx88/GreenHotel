
import { Suspense } from "react";
import UpdateApartment from "@/app/_components/UpdateApartment";
import { getCabin } from "@/app/_lib/data-service";



export const metadata = {
  title: "Edit Apartment",
};

export default async function Page({params}) {
   const { apartmentId } = params;
   const currentApartment = await getCabin(apartmentId);
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Edit Luxury apartment
      </h1>

      <Suspense >
        <UpdateApartment currentApartment={currentApartment} apartmentId={apartmentId}/>
      </Suspense>
    </div>
  );
}
