"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function SearchUsers() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(value) {
  const params = new URLSearchParams(searchParams);

  if (value)
    params.set("search", value);
  else
    params.delete("search");

  params.set("page", "1");

  router.replace(`${pathname}?${params.toString()}`, {
    scroll: false,
  });
}

  return (
    <div className="relative w-full max-w-md">
      <MagnifyingGlassIcon
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-500"
      />

      <input
        type="text"
        placeholder="Search users..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-primary-800
          bg-primary-900
          py-3
          pl-12
          pr-4
          text-primary-100
          placeholder:text-primary-500
          outline-none
          transition-all
          focus:border-accent-500
        "
      />
    </div>
  );
}