import Apartment from "@/app/_components/Apartment";
import Reservation from "@/app/_components/Reservation";
import ReservationReminder from "@/app/_components/ReservationReminder";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const metadata = {
//   title: "Apartment"
// };

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.apartmentId);
  return {
    title: `Apartment ${name}`,
  };
}

// To convert this route from dynamic to static
export async function generateStaticParams() {
  

  try {
    const apartments = await getCabins();

    const ids = apartments.map((apartment) => ({
      apartmentId: String(apartment.id),
    }));
  
    return ids;
  } catch (error) {
    console.error("Failed to fetch cabins during build:", error);
    return []; 
  }
}

export default async function Page({ params }) {
  const apartment = await getCabin(params.apartmentId);
  const { name } = apartment;

  return (
     <div
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
        lg:py-12
      "
    >
      <Apartment apartment={apartment} />

      <section className="mt-16 lg:mt-24">
        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            text-center
            text-accent-400
            mb-8
            lg:mb-12
            leading-tight
          "
        >
          Reserve{" "}
          <span className="text-primary-100">
            {apartment.name}
          </span>{" "}
          today.
          <br className="hidden sm:block" />
          <span className="text-primary-300 text-xl sm:text-2xl lg:text-3xl font-normal">
            Pay on arrival.
          </span>
        </h2>

        <Suspense>
          <Reservation apartment={apartment} />
          <ReservationReminder />
        </Suspense>
      </section>
    </div>
  );
}
