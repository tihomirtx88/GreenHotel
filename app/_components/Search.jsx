"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

export default function Search({
  placeholder = "Search...",
  query = "search",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get(query) ?? "";
  const [searchValue, setSearchValue] = useState(value);

  function handleSearch(text) {
    const params = new URLSearchParams(searchParams);

    if (text) params.set(query, text);
    else params.delete(query);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  function clearSearch() {
    setSearchValue("");

    const params = new URLSearchParams(searchParams);

    params.delete(query);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="relative w-full max-w-md">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-500" />

      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-primary-800
          bg-primary-900
          py-3
          pl-12
          pr-12
          text-primary-100
          placeholder:text-primary-500
          outline-none
          transition-all
          focus:border-accent-500
        "
      />

      {value && (
        <button
          onClick={clearSearch}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            hover:bg-primary-800
            transition
          "
        >
          <XMarkIcon className="h-5 w-5 text-primary-400" />
        </button>
      )}
    </div>
  );
}
