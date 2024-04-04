import getUser from "@/app/lib/getUser";
import getUserPost from "@/app/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.username,
    description: `This is the page of ${user.username}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  //const [user, userPosts] = await Promise.all([userData, userPostData]);

  const user = await userData;

  console.log(userData);

  return (
    <>
      <h2>{user.username}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}
