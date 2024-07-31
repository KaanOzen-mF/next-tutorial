"use client"; // This directive indicates that the component is a client-side component

import { useEffect, useState } from "react"; // Importing hooks for state and side effects
import Image from "next/image"; // Importing Next.js Image component for optimized image handling

// Importing images to be used in the slideshow
import burgerImg from "@/assests/burger.jpg";
import curryImg from "@/assests/curry.jpg";
import dumplingsImg from "@/assests/dumplings.jpg";
import macncheeseImg from "@/assests/macncheese.jpg";
import pizzaImg from "@/assests/pizza.jpg";
import schnitzelImg from "@/assests/schnitzel.jpg";
import tomatoSaladImg from "@/assests/tomato-salad.jpg";

// Array of images and their alt text descriptions for the slideshow
const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

// Main component for the image slideshow
export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

  useEffect(() => {
    // Set an interval to update the current image index every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out ${
            index === currentImageIndex
              ? "z-10 opacity-100 scale-100 translate-x-0 rotate-0"
              : "opacity-0 scale-110 -translate-x-4 -rotate-5"
          }`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
