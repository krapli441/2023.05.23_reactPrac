import React from "react";
import { FaStar } from "react-icons/fa/index.esm.js";

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? "red" : "grey"} />;
};
// Star 컴포넌트는 별 하나를 렌더링한다.
// 이 때, selected 프로퍼티에 따라 적절한 색으로 별 안쪽을 채워넣는다.
// selected 프로퍼티가 컴포넌트에 전달되지 않으면
// 별이 선택되지 않았다고 가정하고, 디폴트 색인 회색으로 칠한다.

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}
