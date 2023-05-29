import React from "react";

// Ingredients 컴포넌트를 사용하면 재료 목록을 표시할 때 
// 항상 사용할 수 있는 Ingredients 컴포넌트를 쉽게 만들 수 있다.

export default function Ingredient({ amount, measurement, name }) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}
