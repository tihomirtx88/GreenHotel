import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
     <nav className="z-20">
      <ul className="flex items-center gap-3 sm:gap-5 lg:gap-8 text-sm sm:text-base lg:text-lg font-medium">
        <li>
          <Link
            href="/apartments"
            className="transition-colors hover:text-accent-400 whitespace-nowrap"
          >
            Rooms
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400 whitespace-nowrap"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/account"
            className="flex items-center gap-2 sm:gap-3 transition-colors hover:text-accent-400"
          >
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={36}
                height={36}
                className="rounded-full border border-primary-700"
                referrerPolicy="no-referrer"
              />
            )}

            <span className="hidden sm:inline">
              Guest Area
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/adminPanel"
            className="flex items-center gap-2 sm:gap-3 transition-colors hover:text-accent-400"
          >
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={36}
                height={36}
                className="rounded-full border border-primary-700"
                referrerPolicy="no-referrer"
              />
            )}

            <span className="hidden lg:inline">
              Admin Area
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
