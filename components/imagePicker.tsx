"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
type ImagePickerProps = {
  label: string;
  name: string;
};
export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current!.click();
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file) {
        setPickedImage(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          setPickedImage(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    } else {
      setPickedImage(null);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-gray-400 flex justify-center items-center text-center text-gray-400 relative">
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="picked image" fill />}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className="bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white py-2 px-6 border-none rounded cursor-pointer"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
