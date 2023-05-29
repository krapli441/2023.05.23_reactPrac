import React from "react";
import Ingredient from "./Ingredients.js";
// 재료를 표시할 때 사용하기 위해 먼저 Ingredient 컴포넌트를 import 하였다.

export default function IngredientsList({ list }) {
  return (
    <ul className="ingredients">
      {list.map((Ingredient, i) => {
        return <Ingredient key={i} {...ingredient} />;
      })}
    </ul>
  );
}

// 이 컴포넌트에 전달되는 재료들은 list 라는 프로퍼티에 들어있는 배열들이다.
// list 배열의 각 재료들을 Ingredient 컴포넌트로 매핑 (map()) 해준다.
// JSX 스프레드 연산자를 사용하면, 배열의 원소에 들어 있는 모든 데이터를 props로
// Ingredient에게 넘길 수 있다.
