var topic = "javascript";

if (topic) {
  var topic = "react";
  console.log("block", topic); // block react 출력
}

console.log("global", topic); // global react 출력

//

let word = "javascript";

if (word) {
  let word = "react";
  console.log("block", word); // block react 출력
}

console.log("global", word); // global javascript 출력
