import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-gradient-radial">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
