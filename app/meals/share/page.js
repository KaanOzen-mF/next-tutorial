export default function ShareMealPage() {
  return (
    <>
      <header className="w-full mx-auto max-w-[90rem] gap-24 mt-24 mb-20 text-[#ddd6cb] leading-loose">
        <h1 className="text-6xl">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="mt-6 text-3xl">
          Or any other meal you feel needs sharing
        </p>
      </header>
      <main className="w-11/12 max-w-6xl ml-[14rem] my-auto">
        <form className="max-w-3xl">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="block w-full px-2 py-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
                focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
          </div>
          <p>
            <label
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="block w-full px-2 py-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
              focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p>
            <label
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="block w-full px-2 py-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
              focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p>
            <label
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="block w-full px-2 py-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
              focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
              id="instructions"
              name="instructions"
              rows={"10"}
              required
            ></textarea>
            IMAGE PICKER
            <p className="text-right">
              <button
                className="border-0 px-3 py-3 border-none bg-gradient-to-r from-[#f9572a] to-[#ff8a05]
                text-[#ffffff] rounded-sm cursor-pointer text-xl shadow-actionShadow hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]"
                type="submit"
              >
                Share Meal
              </button>
            </p>
          </p>
        </form>
      </main>
    </>
  );
}
