"use client";

import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function Sort({
  query = "sort",
  options = [],
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get(query) ?? "";

  function handleSort(e) {
    const params = new URLSearchParams(searchParams);

    if (e.target.value)
      params.set(query, e.target.value);
    else
      params.delete(query);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="relative w-56">
      <ArrowsUpDownIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-500"
      />

      <select
        value={value}
        onChange={handleSort}
        className="
          w-full
          rounded-xl
          border
          border-primary-800
          bg-primary-900
          pl-10
          pr-4
          py-3
          text-primary-100
          outline-none
          focus:border-accent-500
        "
      >
        <option value="">Sort users...</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}