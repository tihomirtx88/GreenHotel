"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createReservation } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function ReservationForm({ apartment, user }) {
  const { maxCapacity, regularPrice, discount, id, hasBreakfast, isPaid } = apartment;
  const { range, resetRange } = useReservation();

  const startDate = range.from;
  const endDate = range.to;

  const numNight = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const cabinPrice = numNight * (regularPrice - discount);

  const reservationData = {
    startDate,
    endDate,
    cabinPrice,
    cabinId: id,
    numNight,
    status: "unconfirmed", 
    hasBreakfast,
    isPaid
  };

  const createBookingWithData = createReservation.bind(null, reservationData);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}

      <div
        className="
          bg-primary-800
          px-5
          sm:px-8
          lg:px-10
          py-4
          flex
          flex-col
          sm:flex-row
          sm:justify-between
          gap-4
        "
      >
        <p className="text-primary-300 font-medium">
          Logged in as
        </p>

        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
            className="
              w-10
              h-10
              rounded-full
              border
              border-primary-700
            "
          />

          <span className="font-semibold">
            {user.name}
          </span>
        </div>
      </div>

      {/* Form */}

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="
          flex
          flex-col
          gap-6
          bg-primary-900
          p-5
          sm:p-8
          lg:p-10
          flex-1
        "
      >
        {/* Guests */}

        <div className="space-y-2">
          <label
            htmlFor="numGuests"
            className="font-medium"
          >
            Number of guests
          </label>

          <select
            id="numGuests"
            name="numGuests"
            required
            className="
              w-full
              rounded-lg
              bg-primary-200
              text-primary-900
              px-4
              py-3
              shadow-sm
              outline-none
              focus:ring-2
              focus:ring-accent-500
            "
          >
            <option value="">
              Select guests...
            </option>

            {Array.from(
              { length: maxCapacity },
              (_, i) => i + 1
            ).map((guest) => (
              <option
                key={guest}
                value={guest}
              >
                {guest}{" "}
                {guest === 1
                  ? "guest"
                  : "guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Notes */}

        <div className="space-y-2">
          <label
            htmlFor="observations"
            className="font-medium"
          >
            Special requests
          </label>

          <textarea
            id="observations"
            name="observation"
            rows={5}
            placeholder="Pets, allergies, arrival time..."
            className="
              w-full
              rounded-lg
              bg-primary-200
              text-primary-900
              px-4
              py-3
              resize-none
              outline-none
              focus:ring-2
              focus:ring-accent-500
            "
          />
        </div>

        {/* Checkboxes */}

        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={hasBreakfast}
              readOnly
              className="w-5 h-5 accent-accent-500"
            />

            Include breakfast
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isPaid}
              readOnly
              className="w-5 h-5 accent-accent-500"
            />

            Mark as paid
          </label>
        </div>

        {/* Footer */}

        <div
          className="
            mt-auto
            flex
            flex-col
            sm:flex-row
            gap-4
            sm:justify-between
            sm:items-center
          "
        >
          {!startDate || !endDate ? (
            <p className="text-primary-400 text-sm">
              Select your dates to continue.
            </p>
          ) : (
            <div className="w-full sm:w-auto">
              <SubmitButton pendingLabel="Reserving...">
                Reserve Now
              </SubmitButton>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
