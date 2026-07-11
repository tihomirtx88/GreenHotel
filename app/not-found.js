"use client"

import Link from "next/link";

function NotFound() {
    return (
       <main className="max-w-2xl mx-auto px-4 sm:px-6">

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
        <div className="text-7xl mb-6">
          🔍
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-accent-400">
          404 - Page Not Found
        </h1>

        <p className="mt-5 text-base sm:text-lg text-primary-300 leading-7">
          Sorry, the page you are looking for doesnt exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center

              rounded-lg

              bg-accent-500

              px-6
              py-3

              font-semibold

              text-primary-900

              transition-all
              duration-300

              hover:bg-accent-600
              hover:scale-[1.02]
              active:scale-95
            "
          >
            Back to Home
          </Link>

          <Link
            href="/apartments"
            className="
              inline-flex
              items-center
              justify-center

              rounded-lg

              border
              border-primary-700

              px-6
              py-3

              font-semibold

              transition-all
              duration-300

              hover:bg-primary-800
            "
          >
            Browse Apartments
          </Link>

        </div>
      </div>

    </main>
    );
  }
  
  export default NotFound;
  