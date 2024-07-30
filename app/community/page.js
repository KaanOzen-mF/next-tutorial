import Image from "next/image";

import mealIcon from "@/assests/icons/meal.png";
import communityIcon from "@/assests/icons/community.png";
import eventsIcon from "@/assests/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="gap-24 mt-24 mb-20 mx-auto w-11/12 max-w-6xl text-[#ddd6cb] text-center">
        <h1 className="text-6xl">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="text-3xl mt-6">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="w-11/12 max-w-xl my-0 mx-auto text-center">
        <h2 className="text-4xl mb-12 text-[#ddd6cb] font-bold">
          Community Perks
        </h2>
        <ul className="p-0 mx-12 my-0">
          <li className="flex flex-col items-center gap-4 mb-8">
            <Image
              className="w-32 h-32 object-contain"
              src={mealIcon}
              alt="A delicious meal"
            />
            <p className="text-[#ddd6cb] text-xl font-bold m-0">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-4 mb-8">
            <Image
              className="w-32 h-32 object-contain"
              src={communityIcon}
              alt="A crowd of people, cooking"
            />
            <p className="text-[#ddd6cb] text-xl font-bold m-0">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image
              className="w-32 h-32 object-contain"
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className="text-[#ddd6cb] text-xl font-bold m-0">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
