"use client"

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './ReservationContext';

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
      <div
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        z-50

        w-[95%]
        sm:w-auto
        max-w-xl

        rounded-2xl
        bg-accent-500
        text-primary-900

        shadow-2xl

        px-5
        py-4
        sm:px-6
        sm:py-5

        flex
        items-start
        justify-between
        gap-4

        animate-in
        slide-in-from-bottom-4
        duration-300
      "
    >
      <div className="flex-1">
        <p className="font-semibold text-base sm:text-lg">
          👋 Dont forget to reserve your stay!
        </p>

        <p className="mt-1 text-sm sm:text-base leading-6">
          {format(range.from, "MMM dd, yyyy")}{" "}
          <span className="font-semibold">→</span>{" "}
          {format(range.to, "MMM dd, yyyy")}
        </p>
      </div>

      <button
        onClick={resetRange}
        aria-label="Close reminder"
        className="
          rounded-full
          p-2
          transition
          hover:bg-accent-600
          hover:text-white
        "
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;