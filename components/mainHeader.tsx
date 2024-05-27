import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <div className="flex bg-slate-500 h-16 items-center p-2 justify-between">
        <Link href="/" className="flex flex-row items-center">
          <Image src={Logo} alt="logo" priority width={50} height={50} />
          <p className="uppercase ml-2 text-xl">Nextlevel Food</p>
        </Link>
        <nav>
          <ul className="flex flex-row items-center space-x-4 text-lg whitespace-nowrap">
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
