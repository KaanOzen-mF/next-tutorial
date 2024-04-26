import Link from "next/link";
import React from "react";

type Props = {};

const MealsPage = (props: Props) => {
  return (
    <div>
      <p>Meals Page</p>
      <Link href="/meals/share" className="text-white hover:text-yellow-100">
        Share a Meal
      </Link>
    </div>
  );
};

export default MealsPage;
