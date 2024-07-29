import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-24 mt-24 w-full items-center justify-center">
        <div className="w-[40rem] h-96">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-2xl max-w-2xl">
            <h1 className="uppercase text-4xl font-bold font-sans mb-4 tracking-widest bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className="text-2xl flex gap-4">
            <Link
              className="inline-block mt-4 pr-2 py-4 rounded-lg font-normal text-[#ff9b05] pl-0 hover:text-[#f9b241]
              "
              href={"/community"}
            >
              Join the Community
            </Link>
            <Link
              className="inline-block mt-4 px-2 py-4 rounded-lg text-white font-bold bg-gradient-to-r from-[#ff8a05] to-[#f9b331]
              hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]"
              href={"/meals"}
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center mt-12">
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-4xl w-11/12 mx-8 my-auto text-center">
          <h2 className="font-bold text-3xl text-[#ddd6cb] mb-10">
            How it works
          </h2>
          <p className="mb-5">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="mb-12">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-3xl w-11/12 mx-8 my-auto text-center">
          <h2 className="font-bold text-3xl text-[#ddd6cb] mb-10">
            Why NextLevel Food?
          </h2>
          <p className="mb-5">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="mb-5">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
