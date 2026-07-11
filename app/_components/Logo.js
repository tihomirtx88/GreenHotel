import Link from "next/link";
import Image from "next/image";
import logo from "@/public/green-logo-3-removebg-preview.png";

function Logo() {
  return (
      <Link
      href="/"
      className="
        group
        flex
        items-center
        gap-3
        sm:gap-4
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <div
        className="
          relative
          w-14
          h-14
          sm:w-16
          sm:h-16
          lg:w-20
          lg:h-20
          flex-shrink-0
        "
      >
        <Image
          src={logo}
          alt="Green Hotel logo"
          fill
          priority
          quality={100}
          sizes="(max-width:768px) 56px, (max-width:1024px) 64px, 80px"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-bold
            tracking-wide
            text-primary-100
          "
        >
          Green Hotel
        </span>

        <span
          className="
            hidden
            sm:block
            text-xs
            lg:text-sm
            text-primary-400
          "
        >
          Luxury Apartments
        </span>
      </div>
    </Link>
  );
}

export default Logo;
