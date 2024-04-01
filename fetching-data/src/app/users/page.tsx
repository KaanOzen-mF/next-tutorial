import { Metadata } from "next";
import React from "react";
import getAllUser from "../lib/getAllUser";

export const metadata: Metadata = {
  title: "Users",
  description: "User Page",
};

export default async function UserPage() {
  const userData: Promise<User[]> = getAllUser();

  const users = await userData;

  return (
    <div className="flex flex-col text-center p-24">
      <h1 className="text-4xl">User Page</h1>
      <div className="flex flex-col items-center">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center p-4">
            <h2 className="text-xl">{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
