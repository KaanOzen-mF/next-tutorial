"use client";
import { useEffect, useState } from "react";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import Image from "next/image";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A spicy curry" },
  { image: dumplingImg, alt: "A plate of dumplings" },
  { image: macncheeseImg, alt: "A bowl of mac and cheese" },
  { image: pizzaImg, alt: "A slice of pizza" },
  { image: schnitzelImg, alt: "A schnitzel with fries" },
  { image: tomatoSaladImg, alt: "A fresh tomato salad" },
];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-all ease-in-out duration-500 ${
            index === currentImageIndex ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={
            index === currentImageIndex
              ? { transform: "scale(1) translateX(0) rotate(0)" }
              : { transform: "scale(1.1) translateX(-1rem) rotate(-5deg)" }
          }
        />
      ))}
    </div>
  );
}
