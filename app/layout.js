import MainHeader from "@/components/main-header/main-header"; // Importing the main header component
import "./globals.css"; // Importing global CSS styles

// Metadata object to set the default title and description for the website
export const metadata = {
  title: "NextLevel Food", // The title that appears on the browser tab
  description: "Delicious meals, shared by a food-loving community.", // A brief description for SEO and sharing purposes
};

// This is the RootLayout component, serving as the main layout for the application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Setting the language attribute for the document */}
      <body className="m-0 bg-gradient-radial">
        {/* Applying a gradient background and removing default margin */}
        <MainHeader />
        {/* Including the main header component */}
        {children}
        {/* Rendering any child components passed to RootLayout */}
      </body>
    </html>
  );
}
