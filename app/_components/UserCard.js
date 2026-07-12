import {
  PencilSquareIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import DeleteUser from "./DeleteUser";
// import Link from "next/link";

export default function UserCard({ user, onDelete }) {
  const fallbackFlag = "/images/default-flag.png";

  return (
    <div
      className="
        border
        border-primary-800
        rounded-xl
        overflow-hidden
        bg-primary-950
        shadow-md
      "
    >
      <div className="flex flex-col lg:flex-row">
        {/* Information */}

        <div className="flex-1 p-5 sm:p-7">
          <h3 className="text-2xl sm:text-3xl font-semibold text-accent-500 mb-6">
            {user.fullName}
          </h3>

          <div className="space-y-4">
            <InfoRow label="Email">{user.email}</InfoRow>

            <InfoRow label="National ID">{user.nationalID}</InfoRow>

            <InfoRow label="Nationality">{user.nationality}</InfoRow>

            <div className="flex items-center gap-3">
              <UserIcon className="w-5 h-5 text-primary-500" />

              <span className="font-medium">Country:</span>
              

             {user.countryFlag?.startsWith("http") ? (
  <Image
    src={user.countryFlag}
    alt="Country Flag"
    width={36}
    height={24}
    className="rounded border border-primary-700"
  />
) : (
  <div
    className="
      flex
      items-center
      justify-center
      w-9
      h-7
      rounded
      border
      border-primary-700
      bg-primary-900
      text-xl
    "
  >
    {user.countryFlag || "🏳️"}
  </div>
)}
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="w-5 h-5 text-primary-500" />

              <span className="font-medium">Role:</span>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  user.admin === "admin"
                    ? "bg-green-700 text-green-100"
                    : "bg-primary-700 text-primary-200"
                }`}
              >
                {user.admin === "admin" ? "Administrator" : "Regular User"}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}

        <div
          className="
            lg:w-44
            border-t
            lg:border-t-0
            lg:border-l
            border-primary-800

            flex
            lg:flex-col
          "
        >
          <Link
            href={`/users/edit/${user.id}`}
            className="
              group
              flex-1
              flex
              items-center
              justify-center
              gap-2

              px-5
              py-5

              text-sm
              uppercase
              font-semibold

              hover:bg-accent-600
              hover:text-primary-900
              transition
            "
          >
            <PencilSquareIcon
              className="
                w-5
                h-5
                text-primary-500
                group-hover:text-primary-900
              "
            />
            Edit
          </Link>

          <DeleteUser userId={user.id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, children }) {
  return (
    <div className="flex items-center gap-3">
      <UserIcon className="w-5 h-5 text-primary-500" />

      <span className="font-medium">{label}:</span>

      <span className="text-primary-200 break-all">{children}</span>
    </div>
  );
}
