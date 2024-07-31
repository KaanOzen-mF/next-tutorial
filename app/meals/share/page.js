import ImagePicker from "@/components/meals/image-picker"; // Importing the component for image upload
import MealsFormSubmit from "@/components/meals/meals-form-submit"; // Importing the form submit button component
import { shareMeal } from "@/lib/actions"; // Importing the action to handle meal sharing

// This is the main functional component for the Share Meal page
export default function ShareMealPage() {
  return (
    <>
      {/* Header section with title and description for sharing meals */}
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
      {/* Main content section with a form to share a meal */}
      <main className="w-11/12 max-w-6xl ml-[14rem] my-auto">
        {/* Form to capture meal details, including name, email, title, summary, instructions, and image */}
        <form className="max-w-3xl" action={shareMeal}>
          <div className="flex gap-4">
            {/* Field for user's name */}
            <p className="w-full">
              <label
                className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="block w-full px-2 py-4 mb-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
                focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            {/* Field for user's email */}
            <p className="w-full">
              <label
                className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="block w-full px-2 py-4 mb-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
                focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          {/* Field for meal title */}
          <p>
            <label
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="block w-full px-2 py-4 mb-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
              focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          {/* Field for short summary of the meal */}
          <p>
            <label
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="block w-full px-2 py-4 mb-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
              focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          {/* Field for detailed instructions */}
          <p>
            <label
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="block w-full px-2 py-4 mb-4 rounded border border-[#454952] bg-[#1c2027] text-xl text-[#ddd6cb]
              focus:outline-none focus:ring-2 focus:ring-custom-outline focus:bg-custom-bg"
              id="instructions"
              name="instructions"
              rows={"10"}
              required
            ></textarea>
            {/* Component for uploading an image of the meal */}
            <ImagePicker name="image" label="Upload Image" />
            {/* Submit button for the form */}
            <p className="text-right">
              <MealsFormSubmit />
            </p>
          </p>
        </form>
      </main>
    </>
  );
}
