import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        <Link href={"/about"}>About Us</Link>
      </p>
      <p>
        <Link href={"/meals/share"}>Share Meal</Link>
      </p>
      <p>
        <Link href={"/community"}>Community</Link>
      </p>
    </main>
  );
}
