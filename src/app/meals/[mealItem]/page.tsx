import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default function MealDetailPage({
  params,
}: {
  params: { mealItem: string };
}) {
  const meal = getMeal(params.mealItem);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className="flex px-8 py-4 gap-12 m-auto max-w-320">
        <div className="relative w-96 h-80">
          {meal?.image && (
            <Image
              src={meal.image}
              alt={meal.title}
              fill
              className="object-cover rounded-lg shadow-md animate-fade-slide-in-left"
            />
          )}
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4 text-ddd6cb max-w-2xl animate-fade-slide-in-right">
          <h1 className="m-0 text-6xl uppercase drop-shadow-lg">
            {meal?.title}
          </h1>
          <p className="text-2xl italic text-cfa69b">
            by{" "}
            <a
              className="bg-action-gradient bg-clip-text 
              hover:drop-shadow-xl hover:bg-gradient-to-r-custom"
              href={`mailto:${meal?.creatorEmail}`}
            >
              {meal?.creator}
            </a>
          </p>
          <p className="text-xl">{meal?.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-lg leading-normal bg-instructionsBg text-instructionsText rounded-md
        shadow-md p-4 max-w-240 mx-8 my-auto animate-fade-slide-in-bottom"
          dangerouslySetInnerHTML={{
            __html:
              meal?.instructions.replace(/\n/g, "<br />") ||
              "No instructions provided.",
          }}
        ></p>
      </main>
    </>
  );
}
