import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />

      <h1>Green Hotel. Welcome to paradise</h1>

      <Link href="/apartments">
        Expolore best apartment for rest and holiday
      </Link>
    </div>
  );
}
