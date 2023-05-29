import React from "react";

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredients, i) => {
          return <li key={i}>{ingredients.name}</li>;
        })}
      </ul>
      <section className="instuctions">
        <h2>how to cook</h2>
        {steps.map((step, i) => {
          return <p key={i}>{step}</p>;
        })}
      </section>
    </section>
  );
}
