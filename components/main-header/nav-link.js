"use client"; // This directive indicates that the component is a client-side component
import Link from "next/link"; // Importing the Link component for navigation
import { usePathname } from "next/navigation"; // Importing usePathname to get the current route

// NavLink component for creating navigation links with active state styling
export default function NavLink({ href, children }) {
  // Get the current pathname to determine if the link is active
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
