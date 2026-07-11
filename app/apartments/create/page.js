import { Suspense } from "react";
import AparmentForm from "@/app/_components/AparmentForm";


export const metadata = {
  title: "Create Apartment",
};

export default async function Page() {

  return (
     <div className="max-w-5xl mx-auto px-4 sm:px-6">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Create a New Apartment
        </h1>

        <p className="mt-4 text-base sm:text-lg text-primary-300 leading-7">
          Add a new luxury apartment to your hotel. Fill in the apartment
          details below and upload an image.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="py-12 text-center text-primary-300">
            Loading form...
          </div>
        }
      >
        <AparmentForm />
      </Suspense>

    </div>
  );
}
