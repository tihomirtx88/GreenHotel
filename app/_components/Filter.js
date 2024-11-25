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
    <div className="border border-primary-800 flex">
      {/* <button
        onClick={() => handleFillter("all")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        All Apartments
      </button>
      <button
        onClick={() => handleFillter("small")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFillter("medium")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        4&mdash;7 guests
      </button>
      <button
        onClick={() => handleFillter("large")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        8&mdash;12 guests
      </button> */}

      <Button
        filter="all"
        handleFillter={handleFillter}
        activeFilter={activeFilter}
      >
        1&mdash;All Apartments
      </Button>
      <Button
        filter="small"
        handleFillter={handleFillter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFillter={handleFillter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFillter={handleFillter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFillter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFillter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter == activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
