import { Suspense } from "react";
import AparmentForm from "@/app/_components/AparmentForm";


export const metadata = {
  title: "Create Apartment",
};

export default async function Page() {

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Create your Luxury apartments
      </h1>

      <Suspense>
        <AparmentForm/>
      </Suspense>
    </div>
  );
}
