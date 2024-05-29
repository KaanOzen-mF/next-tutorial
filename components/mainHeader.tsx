import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import NavLink from "./navLink";

export default function MainHeader() {
  return (
    <header
      className="absolute top-0 w-full z-10
    flex justify-between  text-white py-8 px-4 md:px-1/10"
    >
      <div className="flex flex-row items-center justify-center gap-8 font-bold">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-1 font-bold"
        >
          <Image
            src={Logo}
            alt="logo"
            priority
            className="w-20 h-20 object-contain drop-shadow-lg"
          />
          <p className="uppercase ml-2 text-2xl">Nextlevel Food</p>
        </Link>
        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-xl">
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
