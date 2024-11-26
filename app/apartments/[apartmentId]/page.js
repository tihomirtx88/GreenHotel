import Apartment from "@/app/_components/Apartment";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
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
  const apartments = await getCabins();

  const ids = apartments.map((apartment) => ({
    apartmentId: String(apartment.id),
  }));

  return ids;
}

export default async function Page({ params }) {
  const apartment = await getCabin(params.apartmentId);
  const { name } = apartment;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Apartment apartment={apartment} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation apartment={apartment} />
        </Suspense>
      </div>
    </div>
  );
}
