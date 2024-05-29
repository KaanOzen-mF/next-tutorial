"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname(); //current path
  const isActive = path.startsWith(href);
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg py-2 px-4
       font-normal no-underline hover:text-f9b241 
      ${
        isActive
          ? " bg-gradient-to-r-from-orange-to-yellow bg-clip-text text-transparent"
          : "text-white"
      }`}
    >
      {children}
    </Link>
  );
}
