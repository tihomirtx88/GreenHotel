import { Suspense } from "react";
import UpdateApartment from "@/app/_components/UpdateApartment";
import { getCabin } from "@/app/_lib/data-service";

export const metadata = {
  title: "Edit Apartment",
};

export default async function Page({ params }) {
  const { apartmentId } = params;
  const currentApartment = await getCabin(apartmentId);
  return (
    <section
      className="
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
        lg:py-12
      "
    >
      <div className="mb-8 lg:mb-12">
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            text-accent-400
            leading-tight
          "
        >
          Edit Luxury Apartment
        </h1>

        <p
          className="
            mt-3
            text-primary-300
            text-base
            sm:text-lg
          "
        >
          Update the apartment information below.
        </p>
      </div>

      <div
        className="
          rounded-xl
          border
          border-primary-800
          bg-primary-950
          p-4
          sm:p-6
          lg:p-8
          shadow-lg
        "
      >
        <Suspense>
          <UpdateApartment
            currentApartment={currentApartment}
            apartmentId={apartmentId}
          />
        </Suspense>
      </div>
    </section>
  );
}
