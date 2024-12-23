import { PencilSquareIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import DeleteUser from "./DeleteUser";
// import Link from "next/link";

export default function UserCard({ user }) {
  const fallbackFlag = "/images/default-flag.png";


  return (
    <div className="flex border-primary-800 border">
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Guest: {user?.fullName}
          </h3>

          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Email: {user?.email}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              National ID: {user?.nationalID}
            </p>
          </div>

          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              Nationality: {user?.nationality}
            </p>
          </div>

          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200 flex items-center gap-2">
              Country Flag:{" "}
              <Image
                src={user?.countryFlag || fallbackFlag}
                alt="Country Flag"
                width={50} 
                height={50} 
                className="rounded-full border border-primary-800"
              />
            </p>
          </div>
        </div>

        <div className="flex flex-col border-l border-primary-800 w-[100px]">
      
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteUser userId={user.id} onDelete={onDelete}/>
          </>
    
      </div>
      </div>
    </div>
  );
}
