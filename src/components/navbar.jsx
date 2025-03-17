import Link from "next/link";
import ThemeToggle from "@/theme/theme-toggle";

export default function Navbar() {
  return (
    <nav className="z-40 sticky top-0 duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow items-center w-full flex justify-between px-1.5 lg:pe-5 lg:ps-4 border-b border-gray-950/5 dark:border-white/10">
      <div className="flex items-center justify-between w-full h-14 gap-0 sm:gap-3">
        <Link href="/">Home</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
