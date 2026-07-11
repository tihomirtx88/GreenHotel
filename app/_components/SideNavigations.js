"use client"

import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
  } from '@heroicons/react/24/solid';
  import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
  
  const navLinks = [
    {
      name: 'Home',
      href: '/account',
      icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
    },
    {
      name: 'Reservations',
      href: '/account/reservations',
      icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
    },
    {
      name: 'Guest profile',
      href: '/account/profile',
      icon: <UserIcon className='h-5 w-5 text-primary-600' />,
    },
  ];
  
  function SideNavigation() {
    const pathname = usePathname();
    return (
      <nav
      className="
        border-r
        border-primary-800
        bg-primary-950
        h-full
      "
    >
      <ul
        className="
          flex
          flex-col
          gap-2
          p-3
          h-full
        "
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`
                  group
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-4
                  py-3
                  transition-all
                  duration-300
                  font-medium

                  ${
                    active
                      ? "bg-accent-500 text-primary-900 shadow-md"
                      : "text-primary-200 hover:bg-primary-900 hover:text-primary-100"
                  }
                `}
              >
                <Icon
                  className={`
                    h-5
                    w-5
                    transition-colors

                    ${
                      active
                        ? "text-primary-900"
                        : "text-primary-500 group-hover:text-accent-400"
                    }
                  `}
                />

                <span className="truncate">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}

        <li className="mt-auto pt-3 border-t border-primary-800">
          <SignOutButton />
        </li>
      </ul>
    </nav>
    );
  }
  
  export default SideNavigation;
  