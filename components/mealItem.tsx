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
    <article>
      <header>
        <div>
          <Image src={image} alt={title} fill />
        </div>
        <div>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div>
        <p>{summary}</p>
        <div>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
