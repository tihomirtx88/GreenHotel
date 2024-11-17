import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "Green Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
