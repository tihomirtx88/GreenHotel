import DateSelector from "@/app/_components/DateSelector";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// export const metadata = {
//   title: "Apartment"
// };

export async function generateMetadata({params}) {
  const {name} = await getCabin(params.apartmentId);
  return {
    title: `Apartment ${name}`
  }
}

// To convert this route from dynamic to static
export async function generateStaticParams() {
  const apartments = await getCabins();
  
  const ids = apartments.map((apartment) => ({apartmentId: String(apartment.id)}));

  return ids;
}

export default async function Page({ params }) {
  const apartment = await getCabin(params.apartmentId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    apartment;
  //   console.log(params); //apartmentId

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image src={image} alt={`Cabin ${name}`} fill className="object-cover"/>
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Apartment {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>
              {description}
            </TextExpander>
            </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve {name} today. Pay on arrival.
        </h2>

        <div>
          <DateSelector/>
          
        </div>
      </div>
    </div>
  );
}
