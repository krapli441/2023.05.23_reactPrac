import React from "react";
import { render } from "react-dom";
import StarRating from "./components/Rating.js";

render(
  <article>
    <header>
      <h1>별점</h1>
    </header>
    <div className="rating">
      <StarRating />
    </div>
  </article>,
  document.getElementById("root")
);
