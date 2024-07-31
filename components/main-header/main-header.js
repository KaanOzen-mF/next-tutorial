import logoImg from "@/assests/logo.png"; // Importing the logo image
import Image from "next/image"; // Importing the Next.js Image component for optimized image handling
import MainHeaderBackground from "./main-header-background"; // Importing the background SVG component for the header
import Link from "next/link"; // Importing Link component for client-side navigation
import NavLink from "./nav-link"; // Importing the NavLink component for navigation links

// Main component for the website's header
export default function MainHeader() {
  return (
    <>
      {/* Background for the main header */}
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
        {/* Logo and site name link */}
        <Link
          href="/"
          className="flex items-center justify-center gap-8 text-logoColor font-bold uppercase tracking-widest text-xl md:text-2xl text-[#ddd6cb]"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it" // Alt text for accessibility
            priority
            className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
          />
          NextLevel Food
        </Link>

        {/* Navigation menu */}
        <nav>
          <ul className="flex gap-6 list-none m-0 p-0 text-lg md:text-xl text-[#ddd6cb]">
            {/* Navigation links */}
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
