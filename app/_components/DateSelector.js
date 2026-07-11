"use client"

import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

export default function DateSelector({settings, bookedDates, apartment}) {
  
  const { range, setRange, resetRange} = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = apartment;

  const { minBokkingLength, maxBookingLength } = settings;

  const numNights = differenceInDays(displayRange.to, displayRange.from);

  const cabinPrice = numNights * (regularPrice - discount);

  return (
   <div
      className="
        rounded-xl
        overflow-hidden
        border
        border-primary-800
        bg-primary-950
        shadow-xl
      "
      id="date-picker"
    >
      {/* Calendar */}

      <div className="overflow-x-auto">
        <DayPicker
          className="p-4 md:p-8"
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          min={minBokkingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={months}
          disabled={(curDate) =>
            isPast(curDate) ||
            bookedDates.some((date) =>
              isSameDay(date, curDate)
            )
          }
        />
      </div>

      {/* Bottom */}

      <div
        className="
          bg-accent-500
          text-primary-900
          p-4
          md:px-8
          flex
          flex-col
          md:flex-row
          gap-4
          md:gap-6
          md:items-center
          md:justify-between
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-4
          "
        >
          <p className="flex items-end gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-semibold">
                  ${regularPrice - discount}
                </span>

                <span className="line-through text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-semibold">
                ${regularPrice}
              </span>
            )}

            <span>/night</span>
          </p>

          {numNights ? (
            <>
              <div
                className="
                  bg-accent-600
                  rounded-md
                  px-3
                  py-2
                  font-semibold
                "
              >
                × {numNights}
              </div>

              <div>
                <span className="uppercase text-sm font-bold">
                  Total
                </span>

                <div className="text-2xl font-bold">
                  ${cabinPrice}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {(range.from || range.to) && (
          <button
            onClick={resetRange}
            className="
              w-full
              md:w-auto
              rounded-md
              border
              border-primary-800
              px-5
              py-3
              font-semibold
              transition
              hover:bg-primary-900
              hover:text-white
            "
          >
            Clear selection
          </button>
        )}
      </div>
    </div>
  );
}
