import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
