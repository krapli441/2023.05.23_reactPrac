import React from "react";
import { Link } from "react-router-dom";

export default function Screen() {
  return (
    <>
      <div className="container">
        <h1>리액트 라우터를 실험해봅시다</h1>
        <h2>Second.tsx 두번째로 만든 페이지입니다</h2>
        <Link to="/">
          <form className="button">
            <button type="submit">버튼도 적용되나요?</button>
          </form>
        </Link>
      </div>
    </>
  );
}
