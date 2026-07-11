import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations Page",
};

export default async function Page() {
  const session = await auth();
  
  const bookings = await getBookings(session?.user?.guestId);

  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Your Reservations
        </h1>

        <p className="mt-3 text-primary-300 text-base sm:text-lg">
          Manage your current and upcoming reservations.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div
          className="
            rounded-xl
            border
            border-primary-800
            bg-primary-900
            p-8
            text-center
          "
        >
          <p className="text-lg text-primary-300">
            You dont have any reservations yet.
          </p>

          <Link
            href="/apartments"
            className="
              inline-flex
              mt-6

              rounded-lg
              bg-accent-500
              px-6
              py-3

              font-semibold
              text-primary-900

              transition
              hover:bg-accent-600
            "
          >
            Browse Apartments →
          </Link>
        </div>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
