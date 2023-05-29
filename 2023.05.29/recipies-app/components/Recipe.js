import React from "react";
import IngredientsList from "./IngredientList.js";
import Instructions from "./Instructions.js";

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="how to cook" steps={step} />
    </section>
  );
}

export default Recipe;
