console.log(fetch("https://api.randomuser.me/?nat=US&result=1"));

// Promise { <pending> }

// 대기 중인 프라미스는 데이터가 도착하기 전의 상태를 표현한다.
// .then()이라는 함수를 대기 중인 프라미스에 연쇄 호출해야 한다.

console.log(fetch("https://api.randomuser.me/?nat=US&result=1"));

fetch("https://api.randomuser.me/?nat=US&result=1").then((res) => {
  console.log(res.json());
});

// .then() 함수는 콜백 함수를 인수로 받으며
// 바로 앞에 있는 연산(promise)이 성공하면 콜백이 호출된다.
// fetch()는 데이터를 받아오고, then()은 데이터가 도착하면 그 데이터를 가지고
// 다른 일을 할 수 있다.

fetch("https://api.randomuser.me/?nat=US&result=1")
  .then((res) => res.json())
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);

  // then 함수를 적을 때 세미콜론에 유의하자.
