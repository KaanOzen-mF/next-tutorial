import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

import Image from "next/image";

export default function Community() {
  return (
    <>
      <header className="gap-12 mt-12 mr-auto mb-20 ml-auto w-11/12 max-w-6xl text-2xl text-center">
        <h1 className="font-sans">
          One shared passion:{" "}
          <span className="bg-gradient-to-r-from-orange-to-yellow bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-full mt-0 mb-auto text-center items-center">
        <h2 className="font-sans text-3xl mb-12 text-orange-400">
          Community Perks
        </h2>

        <ul className="list-none mt-12 mb-0 p-0 flex flex-col items-center">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-32 h-32 object-contain self-center"
            />
            <p className="font-sans text-2xl font-bold m-0 text-orange-400">
              Share & discover recipes
            </p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
