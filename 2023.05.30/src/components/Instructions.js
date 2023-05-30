import React from "react";

export default function Instructions({ title, steps }) {
  return (
    <secetion className="instructions">
      <h2>{title}</h2>
      {steps.map((s, i) => {
        return <p key={i}>{s}</p>;
      })}
    </secetion>
  );
}

// 절차의 제목과 단계를 인자로 받는다.
