import react from "react";

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
