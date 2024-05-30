import Image from "next/image";
import Link from "next/link";

type MealItemProps = {
  image: string;
  title: string;
  creator: string;
  summary: string;
  slug: string;
};

export default function MealItem({
  image,
  title,
  creator,
  summary,
  slug,
}: MealItemProps) {
  return (
    <article className="flex flex-col justify-between text-ddd6cb h-full rounded shadow-md overflow-hidden bg-custom-gradient">
      <header>
        <div className=" relative h-60">
          <Image src={image} alt={title} className=" object-cover" fill />
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4">
          <h2 className="m-0 text-xl font-sans">{title}</h2>
          <p className="m-0 text-sm italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-ful">
        <p className="pt-4 pl-4 pb-0 pr-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r-from-orange-to-yellow font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
