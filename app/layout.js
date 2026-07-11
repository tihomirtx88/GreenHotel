import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  // title: "Green Hotel",
  title: {
    template: "%s / Green Hotel",
    default: "Welcome in Green Hotel"
  },
  description: "Adventure Green Hotel"
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body
        className={`
          ${josefin.className}
          bg-primary-950
          text-primary-100
          antialiased
          min-h-screen
          flex
          flex-col
          overflow-x-hidden
        `}
      >
        <Header />

        <div className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
