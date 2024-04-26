import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      <div className="flex p-6">
        <Link className="ml-2 hover:text-yellow-100" href="/meals">
          Meals
        </Link>
        <Link href="/community" className="ml-2 hover:text-yellow-100">
          Community
        </Link>
      </div>
      <p>Home Page</p>
    </main>
  );
}
