import React from "react";

type Props = {
  slug: string;
};

const MealSlug = (props: Props) => {
  return (
    <div>
      MealSlug
      <p>{props.slug}</p>
    </div>
  );
};

export default MealSlug;
