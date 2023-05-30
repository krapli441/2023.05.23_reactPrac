import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu.js";
import data from "./data/recipe.json";

render(<Menu recipes={data} />, document.getElementById("root"));
