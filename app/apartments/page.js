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
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury apartments
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious apartments, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natures beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter/>
      </div>

      <Suspense fallback={<Spinner/>} key={filter}>
        <ApartmentsList filter={filter}/>
      </Suspense>
    </div>
  );
}
