"use server"; // This directive indicates that the code runs on the server-side

import { redirect } from "next/navigation"; // Importing redirect for server-side redirection
import { saveMeal } from "./meals"; // Importing the function to save the meal data
import { revalidatePath } from "next/cache"; // Importing revalidatePath to revalidate cached paths

// Helper function to check if a text field is invalid
function isInvalidText(text) {
  return !text || text.trim() === ""; // Returns true if the text is empty or only contains whitespace
}

// Server-side function to handle sharing a meal
export async function shareMeal(formData) {
  // Extracting data from the form
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validate the input data
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") || // Check for a valid email format
    !meal.image || // Check if an image is provided
    meal.image.size === 0 // Check if the image has size
  ) {
    throw new Error("Invalid Input"); // Throw an error if any validation fails
  }

  await saveMeal(meal); // Save the meal data to the database or storage
  revalidatePath("/meals"); // Revalidate the cached data for the meals path
  redirect("/meals"); // Redirect the user to the meals page
}
