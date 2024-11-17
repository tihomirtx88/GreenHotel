import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo-green.jpeg" height="60" width="60" alt="Green Hotel logo" />
      <span className="text-xl font-semibold text-primary-100">
         Green Hotel
      </span>
    </Link>
  );
}

export default Logo;
