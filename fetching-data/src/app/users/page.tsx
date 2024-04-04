import { Metadata } from "next";
import React from "react";
import getAllUser from "../lib/getAllUser";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "User Page",
};

export default async function UserPage() {
  const userData: Promise<User[]> = getAllUser();

  const users = await userData;

  const content = (
    <section className="flex flex-col items-center p-4">
      <h2>
        <Link href="/">Go to the Home Page</Link>
      </h2>
      <h1 className="text-2xl mt-6 underline mb-2">Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        </div>
      ))}
    </section>
  );
  return content;
}
