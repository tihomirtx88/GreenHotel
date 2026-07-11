import Link from "next/link";

export default function Page() {
  return (
     <div className="max-w-3xl mx-auto px-4 sm:px-6">

      <div
        className="
          mt-10
          sm:mt-16

          rounded-2xl
          border
          border-primary-800
          bg-primary-900

          shadow-lg

          p-8
          sm:p-12

          text-center
        "
      >
        <div className="text-6xl mb-6">
          🎉
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Reservation Confirmed!
        </h1>

        <p className="mt-5 text-base sm:text-lg text-primary-300 leading-7 max-w-xl mx-auto">
          Thank you for choosing <span className="font-semibold text-primary-100">Green Hotel</span>.
          Your reservation has been successfully received. We look forward to
          welcoming you and hope you enjoy your stay.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/account/reservations"
            className="
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
            View My Reservations
          </Link>

          <Link
            href="/apartments"
            className="
              rounded-lg
              border
              border-primary-700

              px-6
              py-3

              font-semibold

              hover:bg-primary-800
              transition
            "
          >
            Browse Apartments
          </Link>

        </div>
      </div>

    </div>
  );
}
