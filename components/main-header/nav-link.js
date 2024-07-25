"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  //Gives currently active path
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-logoColor font-bold py-2 px-4
                hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:text-shadow-golden-glow 
                ${
                  path.startsWith(href)
                    ? "bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent"
                    : undefined
                }`}
    >
      {children}
    </Link>
  );
}
