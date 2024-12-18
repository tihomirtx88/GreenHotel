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
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      {/* <form action={createBookingWithData}  */}
      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observation"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

   
         <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="hasBreakfast"
            checked={hasBreakfast}
            className="w-5 h-5"
          />
          <label htmlFor="hasBreakfast">Include Breakfast?</label>
        </div>

    
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="isPaid"
            checked={isPaid}
            className="w-5 h-5"
          />
          <label htmlFor="isPaid">Mark as Paid?</label>
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve Now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}
