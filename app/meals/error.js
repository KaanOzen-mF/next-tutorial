"use client";

export default function Error() {
  return (
    <main className="mt-64 text-center tracking-wider">
      <h1 className="m-0 text-7xl font-extrabold uppercase bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
        Something went wrong!
      </h1>
      <p className="text-[#ddd8d8] font-bold text-xl mt-12">
        Failed to fetch meal data. Please try again later.
      </p>
    </main>
  );
}
