import React from "react";
import Recipe from "./Recipe.js";

function Menu({ steps }) {
  return (
    <article>
      <header>
        <h1>how to coooook</h1>
      </header>
      <div className="recipies">
        {recipes.map((reipe, i) => {
          return <Recipe key={i} {...Recipe} />;
        })}
      </div>
    </article>
  );
}

export default Menu;
