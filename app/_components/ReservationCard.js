import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNight,
    numGuests,
    totalPrice,
    created_at,
    cabins: { name, image },
  } = booking;

  const past = isPast(new Date(startDate));

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        rounded-xl
        overflow-hidden
        border
        border-primary-800
        bg-primary-950
        shadow-lg
      "
    >
      {/* Image */}

      <div
        className="
          relative
          w-full
          lg:w-56
          h-56
          lg:h-auto
          flex-shrink-0
        "
      >
        <Image
          src={image}
          alt={`Apartment ${name}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="flex-1 p-5 md:p-6 flex flex-col">
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:justify-between
            sm:items-center
            gap-3
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            {numNight} night{numNight > 1 ? "s" : ""} in Apartment {name}
          </h3>

          <span
            className={`self-start rounded-md px-3 py-1 text-xs font-bold uppercase ${
              past
                ? "bg-yellow-800 text-yellow-200"
                : "bg-green-800 text-green-200"
            }`}
          >
            {past ? "Past" : "Upcoming"}
          </span>
        </div>

        <p className="mt-3 text-primary-300 leading-7">
          {format(new Date(startDate), "EEE, MMM dd yyyy")}
          {" ("}
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          {")"}
          {" — "}
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            md:flex-row
            md:items-center
            md:flex-wrap
          "
        >
          <p className="text-2xl font-bold text-accent-400">
            ${totalPrice}
          </p>

          <span className="hidden md:block text-primary-500">•</span>

          <p className="text-primary-300">
            {numGuests} Guest{numGuests > 1 ? "s" : ""}
          </p>

          <p className="md:ml-auto text-sm text-primary-500">
            Booked{" "}
            {format(
              new Date(created_at),
              "EEE, MMM dd yyyy, p"
            )}
          </p>
        </div>
      </div>

      {/* Actions */}

      {!past && (
        <div
          className="
            flex
            lg:flex-col
            border-t
            lg:border-t-0
            lg:border-l
            border-primary-800
            w-full
            lg:w-44
          "
        >
          <Link
            href={`/account/reservations/edit/${id}`}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              px-5
              py-4
              border-r
              lg:border-r-0
              lg:border-b
              border-primary-800
              hover:bg-accent-600
              hover:text-primary-900
              transition-all
            "
          >
            <PencilSquareIcon className="w-5 h-5" />
            <span>Edit</span>
          </Link>

          <div className="flex-1">
            <DeleteReservation
              bookingId={id}
              onDelete={onDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationCard;