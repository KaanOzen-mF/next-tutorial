import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //extra delay to simulate a slow network
  return db.prepare("SELECT * FROM meals").all();
}
type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creatorEmail: string;
};

export function getMeal(slug: string): Meal | undefined {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as
    | Meal
    | undefined;
}
