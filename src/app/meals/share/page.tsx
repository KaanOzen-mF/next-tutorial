export default function ShareMealPage() {
  return (
    <>
      <header className="gap-12 mt-12 mr-auto mb-20 ml-auto w-5/6 max-w-6xl text-ddd6cb text-2xl">
        <h1>
          Share your <span className="font-sans">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-5/6 max-w-6xl mx-12 my-auto">
        <form className="max-w-3xl text-white">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base uppercase font-bold
                 focus:outline-outlineColor focus:bg-formFocusBg"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full py-2 px-4 border border-solid border-x-slate-50 text-lg
                focus:outline-outlineColor focus:bg-formFocusBg"
                required
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base uppercase font-bold
                 focus:outline-outlineColor focus:bg-formFocusBg"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full py-2 px-4 border border-solid border-x-slate-50 text-lg
                focus:outline-outlineColor focus:bg-formFocusBg"
              />
            </p>
          </div>
          <p className="w-full">
            <label
              htmlFor="title"
              className="block mb-2 mt-4 text-base uppercase font-bold
                 focus:outline-outlineColor focus:bg-formFocusBg"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full py-2 px-4 border border-solid border-x-slate-50 text-lg
              focus:outline-outlineColor focus:bg-formFocusBg"
            />
          </p>
          <p className="w-full">
            <label
              htmlFor="summary"
              className="block mb-2 mt-4 text-base uppercase font-bold
                 focus:outline-outlineColor focus:bg-formFocusBg"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full py-2 px-4 border border-solid border-x-slate-50 text-lg
              focus:outline-outlineColor focus:bg-formFocusBg"
            />
          </p>
          <p className="w-full">
            <label
              htmlFor="instructions"
              className="block mb-2 mt-4 text-base uppercase font-bold
                 focus:outline-outlineColor focus:bg-formFocusBg"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="block w-full py-2 px-4 border border-solid border-x-slate-50 text-lg
              focus:outline-outlineColor focus:bg-formFocusBg"
            ></textarea>
          </p>
          <p className="w-full mt-6 mb-3">
            <button
              type="submit"
              className="text-right border-none py-2 px-8 text-white cursor-pointer 
              bg-action-gradient rounded-md text-lg shadow-xl
              hover:bg-gradient-to-r-custom focus:bg-gradient-to-r-custom"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
