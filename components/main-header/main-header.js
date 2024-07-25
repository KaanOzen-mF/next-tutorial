import logoImg from "@/assests/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 text-logoColor font-bold uppercase tracking-widest text-xl md:text-2xl text-[#ddd6cb]"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            priority
            className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className="flex gap-6 list-none m-0 p-0 text-lg md:text-xl text-[#ddd6cb]">
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
