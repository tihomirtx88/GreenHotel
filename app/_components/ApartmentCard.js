"use client";

import { PencilSquareIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import DeleteCabin from "./DeleteCabin";

function ApartmentCard({ apartment, onDelete }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = apartment;

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-xl
        border border-primary-800
        bg-primary-950
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        hover:border-accent-500
        flex
        flex-col
        lg:flex-row
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          w-full
          h-64
          lg:h-auto
          lg:w-2/5
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={`Apartment ${name}`}
          fill
          priority={false}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 40vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          flex
          flex-col
          flex-1
          justify-between
        "
      >
        {/* TOP */}

        <div className="p-6">
          <h3
            className="
              text-xl
              md:text-2xl
              text-accent-500
              font-semibold
              mb-4
            "
          >
            Apartment {name}
          </h3>

          <div className="flex items-center gap-3 mb-6">
            <UsersIcon className="h-5 w-5 text-accent-400 flex-shrink-0" />

            <p className="text-primary-200 text-base md:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <div className="flex justify-end items-end gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl md:text-3xl font-light">
                  ${regularPrice - discount}
                </span>

                <span className="line-through text-primary-500 text-lg">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl md:text-3xl font-light">
                ${regularPrice}
              </span>
            )}

            <span className="text-primary-300 text-sm md:text-base">
              / night
            </span>
          </div>
        </div>

        {/* BUTTONS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            border-t
            border-primary-800
          "
        >
          <Link
            href={`/apartments/edit/${id}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              py-4
              hover:bg-accent-600
              transition-colors
              border-b
              sm:border-b-0
              sm:border-r
              border-primary-800
            "
          >
            <PencilSquareIcon className="h-5 w-5" />

            <span>Edit</span>
          </Link>

          <DeleteCabin apartmentId={id} onDelete={onDelete} />

          <Link
            href={`/apartments/${id}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              py-4
              hover:bg-accent-600
              transition-colors
              border-t
              sm:border-t-0
              sm:border-l
              border-primary-800
            "
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;
