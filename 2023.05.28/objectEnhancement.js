const name = "탈락";
const elevation = 9738;

const print = function () {
  console.log(`${this.name} 산의 높이는 ${this.elevation} 피트입니다.}`);
};

const mountain = { name, elevation, print };
console.log(mountain.print());

// 객체 리터럴 개선을 통해 객체 메서드를 생산하는 것도 가능하다.
