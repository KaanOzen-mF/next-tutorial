// This is the functional component for the 404 Not Found page
export default function NotFound() {
  return (
    <main className="mt-64 text-center tracking-wider">
      {/* Main heading with gradient text effect indicating the page is not found */}
      <h1 className="m-0 text-7xl font-extrabold uppercase bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
        Not Found
      </h1>
      {/* Message to inform the user that the requested page or resource is unavailable */}
      <p className="text-[#ddd8d8] font-bold text-xl mt-12">
        Unfortunately, we could not find the requested page or resource
      </p>
    </main>
  );
}
