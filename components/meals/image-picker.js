"use client"; // This directive indicates that the component is a client-side component
import Image from "next/image"; // Importing the Next.js Image component for optimized image handling
import { useRef, useState } from "react"; // Importing hooks for state and references

// ImagePicker component allows users to select an image and preview it
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(); // State to hold the selected image data URL
  const imageInput = useRef(); // Reference to the file input element

  // Function to trigger the file input click event
  function handlePickClick() {
    imageInput.current.click();
  }

  // Function to handle the change event when an image is selected
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null); // Reset if no file is selected
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result); // Set the image data URL for preview
    };

    fileReader.readAsDataURL(file); // Read the file as a data URL
  }

  return (
    <div>
      {/* Label for the image input */}
      <label htmlFor={name}>{label}</label>
      <div className="controls flex items-start gap-6 mb-4">
        {/* Preview box for the selected image */}
        <div className="preview w-40 h-40 border-2 border-gray-400 flex justify-center items-center text-center text-gray-400 relative">
          {!pickedImage && <p className="m-0 p-4">No image picked yet.</p>}{" "}
          {/* Default message if no image is selected */}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        {/* Hidden file input element */}
        <input
          className="input hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        {/* Button to open the file picker dialog */}
        <button
          className="button border-0 py-2 px-6 bg-gray-400 rounded cursor-pointer font-inherit hover:bg-gray-500 focus:bg-gray-500"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
