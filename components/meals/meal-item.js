import Image from "next/image";
import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-md overflow-hidden transition-all duration-300 text-gray-200 bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-60 ">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4">
          <h2 className="m-0 text-2xl">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic m-0">{creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 pr-4 pb-0 pl-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 px-4 py-4 rounded-lg text-white font-bold bg-gradient-to-r from-[#f9572a] to-[#ff9b05] 
            hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] 
            active:bg-gradient-to-r active:from-[#fd4715] active:to-[#f9b241] active:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
