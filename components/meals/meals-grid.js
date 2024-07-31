import MealItem from "./meal-item"; // Importing the MealItem component to display individual meal details

// MealsGrid component displays a grid of MealItem components
export default function MealsGrid({ meals }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto list-none p-0">
      {meals.map((meal) => (
        // Each meal is rendered as a list item containing a MealItem component
        <li key={meal.id}>
          <MealItem {...meal} />{" "}
          {/* Spreading the meal properties into the MealItem component */}
        </li>
      ))}
    </ul>
  );
}
