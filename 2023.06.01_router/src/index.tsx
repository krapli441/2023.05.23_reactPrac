// ! 리액트 라이브러리
import React from "react";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ? 컴포넌트
import App from "./components/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
);
