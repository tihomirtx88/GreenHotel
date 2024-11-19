import Link from "next/link";
import Image from "next/image";
import Homeimage from "@/public/green-3.jpg";
export default function Home() {
  return (
    <main className="mt-24">
      <Image quality={80} className="w-full object-cover object-top" placeholder="blur" fill src={Homeimage} alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 my-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury rooms
        </Link>
      </div>
    </main>
  );
}
