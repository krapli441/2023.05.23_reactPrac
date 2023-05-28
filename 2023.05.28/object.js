const subway = {
  bread: "플랫브레드",
  cheese: "슈레드",
  meat: "햄",
  vegetable: ["양상추", "토마토", "올리브", "할라피뇨"],
};

// 서브웨이 객체에는 4개의 필드가 있다.
// 그 주에서 bread와 meat의 값이 필요하다.

const { bread, meat } = subway;
// subway를 분해하여 breat와 meat 필드를 같은 이름의 변수에 넣었다.

console.log(bread, meat); // 플랫브래드 햄

// 두 변수의 값은 subway에 있는 같은 이름의 필드 값으로 초기화되었지만
// 두 변수를 변경해도 원래의 필드 값이 바뀌지는 않는다.

const subway = {
  bread: "플랫브레드",
  cheese: "슈레드",
  meat: "햄",
  vegetable: ["양상추", "토마토", "올리브", "할라피뇨"],
};

let { bread, meat } = subway;
bread = "오트밀";
meat = "리챔";

console.log(bread); // 오트밀
console.log(meat); // 리챔

console.log(subway.bread, subway.meat); // 플랫브레드 햄
