import Link from "next/link";
import Image from "next/image";
import logo from "@/public/green-logo-3-removebg-preview.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 w-[85px] h-[85px] rounded-full transition-transform duration-300 hover:scale-105">
      {/* With nesssery heigh and width */}
      {/* <Image src="/logo-green.jpeg" height="60" width="60" alt="Green Hotel logo" /> */}
      {/* Second way  */}
      <Image src={logo} alt="Green Hotel logo" quality={100}/>
      <span className="text-xl font-semibold text-primary-100">
         Green Hotel
      </span>
    </Link>
  );
}

export default Logo;
