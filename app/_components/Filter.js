"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFillter(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
      <div
      className="
        w-full
        overflow-x-auto
        scrollbar-hide
      "
    >
      <div
        className="
          flex
          min-w-max
          rounded-xl
          border
          border-primary-800
          overflow-hidden
          bg-primary-950
        "
      >
        <FilterButton
          filter="all"
          activeFilter={activeFilter}
          onClick={handleFilter}
        >
          All Apartments
        </FilterButton>

        <FilterButton
          filter="small"
          activeFilter={activeFilter}
          onClick={handleFilter}
        >
          1–3 Guests
        </FilterButton>

        <FilterButton
          filter="medium"
          activeFilter={activeFilter}
          onClick={handleFilter}
        >
          4–7 Guests
        </FilterButton>

        <FilterButton
          filter="large"
          activeFilter={activeFilter}
          onClick={handleFilter}
        >
          8–12 Guests
        </FilterButton>
      </div>
    </div>
  );
}

function FilterButton({
  filter,
  activeFilter,
  onClick,
  children,
}) {
  const active = filter === activeFilter;

  return (
    <button
      onClick={() => onClick(filter)}
      className={`
        whitespace-nowrap
        px-5
        sm:px-6
        py-3
        text-sm
        sm:text-base
        font-medium
        transition-all
        duration-300
        border-r
        last:border-r-0
        border-primary-800

        ${
          active
            ? "bg-accent-500 text-primary-900"
            : "text-primary-200 hover:bg-primary-800"
        }
      `}
    >
      {children}
    </button>
  );
}