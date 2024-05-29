import ImageSlider from "@/components/imageSlider";
import NavLink from "@/components/navLink";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-11/12 max-w-6xl">
        {/* Slide Show Part  Start*/}
        <div className="w-96 h-56">
          <ImageSlider />
        </div>
        {/* Slide Show Part End */}

        <div className="text-xl">
          {/* Hero Part */}
          <div>
            <h1
              className="text-3xl font-bold text-serif tracking-wide uppercase 
            bg-gradient-to-r-from-orange-to-yellow bg-clip-text text-transparent"
            >
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="mt-4">Taste & Share food from all over the world</p>
          </div>
          {/* Hero Part  End*/}

          {/* CTA Part Start*/}

          <div className="flex text-xl gap-4"></div>
          {/* CTA Part End*/}
        </div>
      </header>

      <main>
        {/* Section Part Start*/}
        <section className="flex flex-col text-2xl w-11/12 max-w-3xl my-8 mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="flex flex-col text-2xl w-11/12 max-w-3xl my-8 mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        {/* Section Part End*/}
      </main>
    </>
  );
}
