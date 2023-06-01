import React from "react";
import { Route, Routes } from "react-router-dom";
import Screen from "./Screen";
import Second from "./Second";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/Second" element={<Second />} />
      </Routes>
    </>
  );
};
