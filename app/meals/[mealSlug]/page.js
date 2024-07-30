import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex px-8 py-4 gap-24 mt-12 m-auto max-w-7xl">
        <div className="relative w-[30rem] h-80">
          <Image
            className="object-cover rounded-lg animate-fade-slide-in-from-left shadow-custom"
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4 text-[#ddd6cb] max-w-2xl animate-fade-slide-in-from-right">
          <h1 className="m-0 text-6xl uppercase text-shadow-title-shadow">
            {meal.title}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic">
            by{" "}
            <a
              className=" bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main className="flex items-center justify-center">
        <p
          className="text-xl bg-[#6e6464] text-[#13120f] rounded-lg p-8 max-w-4xl mx-8 my-auto animate-fade-slide-in-from-bottom"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
