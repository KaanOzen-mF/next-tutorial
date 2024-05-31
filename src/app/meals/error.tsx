"use client";
export default function Error({ error }: { error: any }) {
  <main className="mt-20 text-center">
    <h1
      className="text-7xl m-0 font-black uppercase
    bg-gradient-to-r-from-orange-to-yellow bg-clip-text bg-cover bg-center"
    >
      An error occurred!
    </h1>
    <p className="text-2xl font-medium text-white">
      Failed to fetch meal data. Please try again later.
    </p>
  </main>;
}
