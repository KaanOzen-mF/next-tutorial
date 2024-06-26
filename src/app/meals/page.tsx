import { Suspense } from "react";
import MealsGrid from "@/components/mealsGrid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

async function MealsItem() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <header className="gap-12 mt-12 mr-auto mb-20 ml-auto w-11/12 max-w-6xl text-2xl text-center text-white">
        <h1>
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r-from-orange-to-yellow bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link
            href="/meals/share"
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r-from-orange-to-yellow
            text-white font-bold "
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className="flex flex-col items-center">
        <Suspense
          fallback={
            <p className="text-center animate-pulse text-white">
              Fetching meals...
            </p>
          }
        >
          <MealsItem />
        </Suspense>
      </main>
      ;
    </>
  );
}
