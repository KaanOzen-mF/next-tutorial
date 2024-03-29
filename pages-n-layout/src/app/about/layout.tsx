import Link from "next/link";
import React from "react";

export default function AboutPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="justify-center text-center flex gap-12">
        <Link
          className="hover:bg-white hover:text-black p-3 rounded-lg"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:bg-white hover:text-black p-3 rounded-lg"
          href="/about/contact"
        >
          Contact
        </Link>
      </nav>
      {children}
    </div>
  );
}
