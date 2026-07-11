import SideNavigation from "@/app/_components/SideNavigations";

export default function Layout({ children }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-[16rem_1fr]

        gap-6
        lg:gap-12

        min-h-full
      "
    >
      <aside>
        <SideNavigation />
      </aside>

      <main className="py-2 min-w-0">{children}</main>
    </div>
  );
}
