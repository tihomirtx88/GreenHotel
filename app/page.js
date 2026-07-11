import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/public/CasaSalvaje_Archdaily_33.jpg";

export default function Home() {
  return (
    <main className="relative mt-16 lg:mt-24 min-h-screen">
      <Image
        fill
        priority
        quality={90}
        placeholder="blur"
        src={HomeImage}
        alt="Mountains and forests with two cabins"
        className="object-cover object-center brightness-75"
      />

      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        justify-center
        min-h-screen
        px-6
        text-center"
      >
        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
          text-primary-50
          tracking-tight
          leading-tight
          mb-8"
        >
          Welcome to paradise.
        </h1>

        <Link
          href="/apartments"
          className="
          bg-accent-500
          hover:bg-accent-600
          transition-all
          duration-300
          rounded-md
          px-6
          sm:px-8
          py-4
          sm:py-5
          text-base
          sm:text-lg
          font-semibold"
        >
          Explore luxury rooms
        </Link>
      </div>
    </main>
  );
}
