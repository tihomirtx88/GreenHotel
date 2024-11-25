import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import ApartmentCard from "./ApartmentCard";

export default async function ApartmentsList({ filter }) {
  // Refresh data cache
  // unstable_noStore();
  
  const apartments = await getCabins();

  if (!apartments.length) return null;

  let displayedApartments;
  if (filter === "all") displayedApartments = apartments;
  if (filter === "small")
    displayedApartments = apartments.filter((apartment) => apartment.maxCapacity <= 3);
  if (filter === "medium")
    displayedApartments = apartments.filter(
      (apartment) => apartment.maxCapacity >= 4 && apartment.maxCapacity <= 7
    );
  if (filter === "large")
    displayedApartments= apartments.filter((apartment) => apartment.maxCapacity >= 8);
  

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedApartments.map((apartment) => (
        <ApartmentCard apartment={apartment} key={apartment.id} />
      ))}
    </div>
  );
}
