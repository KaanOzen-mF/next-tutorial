import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-center text-white">
        Hello world!
      </h1>
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
