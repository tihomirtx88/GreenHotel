"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function RoleFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get("role") ?? "all";

  function handleChange(e) {
    const params = new URLSearchParams(searchParams);

    if (e.target.value === "all")
      params.delete("role");
    else
      params.set("role", e.target.value);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      className="
        rounded-xl
        border
        border-primary-800
        bg-primary-900
        px-4
        py-3
        text-primary-100
      "
    >
      <option value="all">All Users</option>
      <option value="admin">Administrators</option>
      <option value="user">Regular Users</option>
    </select>
  );
}