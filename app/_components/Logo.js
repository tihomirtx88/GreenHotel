import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-green.jpeg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
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
