const name = "탈락";
const elevation = 9738;

const print = function () {
  console.log(`${this.name} 산의 높이는 ${this.elevation} 피트입니다.}`);
};

const mountain = { name, elevation, print };
console.log(mountain.print());

// 객체 리터럴 개선을 통해 객체 메서드를 생산하는 것도 가능하다.

// * 옛날 방식

var skier = {
  name: name,
  sound: sound,
  powderYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell} !!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log("속력(mph):", mph);
  },
};

console.log(skier);

// * 새로운 방식

const skieer = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell} !!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("속력(mph):", mph);
  },
};

console.log(skieer);
