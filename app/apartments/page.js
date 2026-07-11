import ApartmentsList from "../_components/ApartmentsList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

//Refresh data affter 36 sec
export const revalidate = 3600;

export const metadata = {
  title: "Apartments",
};

export default async function Page({searchParams}) {

  const filter = searchParams?.capacity ?? "all";

  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* Header */}

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400">
          Our Luxury Apartments
        </h1>

        <p className="mt-5 text-base sm:text-lg leading-8 text-primary-300 max-w-4xl">
          Cozy yet luxurious apartments located in the heart of the Italian
          Dolomites. Wake up to breathtaking mountain views, spend your days
          exploring peaceful forests, or simply relax in your private hot tub
          beneath the stars. Experience nature without sacrificing comfort.
        </p>
      </div>

      {/* Filter */}

      <div className="flex justify-center lg:justify-end mb-10">
        <Filter />
      </div>

      {/* Apartments */}

      <Suspense
        key={filter}
        fallback={
          <div className="py-20 flex justify-center">
            <Spinner />
          </div>
        }
      >
        <ApartmentsList filter={filter} />
      </Suspense>
    </div>
  );
}
