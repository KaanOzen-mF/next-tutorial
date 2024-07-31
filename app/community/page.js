import Image from "next/image"; // Importing the Next.js Image component for optimized image handling

// Importing icons used in the community perks section
import mealIcon from "@/assests/icons/meal.png";
import communityIcon from "@/assests/icons/community.png";
import eventsIcon from "@/assests/icons/events.png";

// This is the main functional component for the Community Page
export default function CommunityPage() {
  return (
    <>
      {/* Header section with a title and introductory text */}
      <header className="gap-24 mt-24 mb-20 mx-auto w-11/12 max-w-6xl text-[#ddd6cb] text-center">
        <h1 className="text-6xl">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        {/* Subheading inviting users to join the community */}
        <p className="text-3xl mt-6">
          Join our community and share your favorite recipes!
        </p>
      </header>
      {/* Main content section describing the community perks */}
      <main className="w-11/12 max-w-xl my-0 mx-auto text-center">
        <h2 className="text-4xl mb-12 text-[#ddd6cb] font-bold">
          Community Perks
        </h2>
        {/* List of perks offered by the community */}
        <ul className="p-0 mx-12 my-0">
          {/* List item for sharing and discovering recipes */}
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
          {/* List item for finding new friends */}
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
          {/* List item for participating in exclusive events */}
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
