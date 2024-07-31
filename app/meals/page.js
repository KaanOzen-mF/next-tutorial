import { Suspense } from "react"; // Importing Suspense for lazy loading components
import Link from "next/link"; // Importing Link component for client-side navigation

import MealsGrid from "@/components/meals/meals-grid"; // Importing MealsGrid component to display meals in a grid
import { getMeals } from "@/lib/meals"; // Importing getMeals function to fetch meal data

// Async function to fetch meals and render the MealsGrid component
async function Meals() {
  const meals = await getMeals(); // Fetching meals data
  return <MealsGrid meals={meals} />; // Rendering the meals grid with fetched data
}

// Main component for the Meals page
export default async function MealsPage() {
  return (
    <>
      {/* Header section with a title and description */}
      <header className="w-full mx-auto max-w-[90rem] gap-24 mt-24 mb-20 text-[#ddd6cb] text-2xl leading-loose">
        <h1 className="text-6xl">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        {/* Link to share a favorite recipe */}
        <p className="inline-block mt-4 px-1 py-1 rounded-lg font-bold bg-gradient-to-r from-[#f9572a] to-[#ff9b05]">
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        {/* Suspense component to handle loading state while fetching meals */}
        <Suspense
          fallback={
            <p className="text-center animate-loading">Fetching meals...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
