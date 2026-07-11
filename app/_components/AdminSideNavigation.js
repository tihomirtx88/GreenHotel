"use client";

import {
  HomeIcon,
  BuildingOfficeIcon,
  RectangleStackIcon 
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Create rooms",
    href: "/apartments/create",
    icon: <BuildingOfficeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Create user",
    href: "/users/create",
    icon: <RectangleStackIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "All users",
    href: "/users",
    icon: <RectangleStackIcon className="h-5 w-5 text-primary-600" />,
  },
];

function AdminSideNavigation() {
  const pathname = usePathname();
  return (
     <nav
      className="
        w-full
        lg:w-72
        border-b
        lg:border-b-0
        lg:border-r
        border-primary-800
        bg-primary-950
        lg:sticky
        lg:top-0
        lg:h-screen
      "
    >
      <ul
        className="
          flex
          flex-col
          h-full
          text-base
          lg:text-lg
        "
      >
        {navLinks.map((link) => {
          const active = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  transition-all
                  duration-300
                  border-l-4
                  ${
                    active
                      ? "bg-primary-900 border-accent-500 text-accent-400"
                      : "border-transparent text-primary-200 hover:bg-primary-900 hover:text-accent-400"
                  }
                `}
              >
                <span
                  className={`
                    ${
                      active
                        ? "text-accent-400"
                        : "text-primary-500"
                    }
                  `}
                >
                  {link.icon}
                </span>

                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}

        <li className="mt-auto border-t border-primary-800">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default AdminSideNavigation;
