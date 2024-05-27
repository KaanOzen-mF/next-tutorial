import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Home Page</h1>
      <div className="flex justify-around">
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share</Link>
        <Link href="/community">Community</Link>
      </div>
    </main>
  );
}
