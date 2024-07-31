import fs from "node:fs"; // Importing the Node.js file system module for file operations
import sql from "better-sqlite3"; // Importing the better-sqlite3 module for SQLite database operations
import slugify from "slugify"; // Importing slugify to create URL-friendly slugs
import xss from "xss"; // Importing xss to sanitize user input

const db = sql("meals.db"); // Connecting to the SQLite database named meals.db

// Function to retrieve all meals from the database
export async function getMeals() {
  //await new Promise((resolve) => setTimeout(resolve, 5000)); // Optional delay for testing
  return db.prepare("SELECT * FROM meals").all(); // Fetching all meals
}

// Function to retrieve a single meal by its slug
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // Fetching a meal by slug
}

// Function to save a new meal to the database
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // Creating a URL-friendly slug from the title
  meal.instructions = xss(meal.instructions); // Sanitizing the instructions to prevent XSS attacks

  // Extracting the file extension from the image name
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`; // Creating a unique file name for the image

  // Creating a write stream to save the image in the public directory
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer(); // Converting the image to a buffer

  // Writing the image buffer to the file
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!"); // Throwing an error if image saving fails
    }
  });

  meal.image = `/images/${fileName}`; // Setting the image path in the meal object

  // Inserting the meal data into the database
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal); // Running the SQL command with the meal data
}
