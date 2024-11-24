import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import ApartmentCard from "./ApartmentCard";

export default async function ApartmentsList() {
  // Refresh data cache
  // unstable_noStore();

  const apartments = await getCabins();

  if (!apartments.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {apartments.map((apartment) => (
        <ApartmentCard apartment={apartment} key={apartment.id} />
      ))}
    </div>
  );
}
