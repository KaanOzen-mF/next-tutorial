import Link from "next/link";

import logoImg from "@/assests/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="Logo" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}