import { SubmitButton } from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({params}) {
   
  const { bookingId } = params;
  const { numGuests, observation, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Edit Reservation
        </h1>

        <p className="mt-3 text-primary-300 text-base sm:text-lg">
          Reservation #
          <span className="font-semibold text-accent-400">
            {" "}
            {bookingId}
          </span>
        </p>
      </div>

      <form
        action={updateReservation}
        className="
          bg-primary-900
          rounded-xl
          shadow-lg

          p-5
          sm:p-8
          lg:p-10

          flex
          flex-col
          gap-6
        "
      >
        <input
          type="hidden"
          value={bookingId}
          name="bookingId"
        />

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
            defaultValue={numGuests}
            required
            className="
              w-full
              rounded-lg
              bg-primary-200
              px-4
              py-3
              text-primary-900
              shadow-sm

              outline-none
              transition

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

        {/* Observation */}

        <div className="space-y-2">
          <label
            htmlFor="observation"
            className="font-medium"
          >
            Additional information
          </label>

          <textarea
            id="observation"
            name="observation"
            rows={6}
            defaultValue={observation}
            placeholder="Special requests, allergies, pets..."
            className="
              w-full
              rounded-lg
              bg-primary-200
              px-4
              py-3
              text-primary-900
              shadow-sm

              resize-none

              outline-none
              transition

              focus:ring-2
              focus:ring-accent-500
            "
          />
        </div>

        {/* Submit */}

        <div className="flex justify-end pt-4">
          <SubmitButton pendingLabel="Updating reservation...">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
