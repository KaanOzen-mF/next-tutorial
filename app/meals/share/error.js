"use client"; // This directive indicates that the component is a client-side component

// This is the functional component for displaying an error message when creating a meal fails
export default function Error() {
  return (
    <main className="mt-64 text-center tracking-wider">
      {/* Main heading indicating that an error has occurred */}
      <h1 className="m-0 text-7xl font-extrabold uppercase bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
        An error occurred!
      </h1>
      {/* Error message explaining the specific issue */}
      <p className="text-[#ddd8d8] font-bold text-xl mt-12">
        Failed to create meal.
      </p>
    </main>
  );
}
