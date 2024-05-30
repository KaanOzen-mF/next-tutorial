import MealItem from "./mealItem";

export default function MealsGrid({ meals }: { meals: any[] }) {
  return (
    <ul className="w-11/12 max-w-7xl grid p-0 list-none mt-8 mb-auto gap-20">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
