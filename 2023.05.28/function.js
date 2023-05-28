// function logView() {
//   console.log("함수를 제작하였다.");
// }

// logView(); // 선언한 함수를 호출하여 실행할 수 있다.

// //

// const log = function () {
//   console.log("함수 표현식으로 함수를 제작했다.");
// };
// log();

// // 함수를 만드는 다른 방법으로, 함수 표현식이 있다.
// // 함수 표현식은 (이름 없는) 함수를 제작하며, 변수에 값을 대입할 수 있다.

// // 함수 선언은 호이스팅되지만, 함수 표현식은 호이스팅되지 않는다.
// // 즉, 함수 선언을 작성하기 전에 함수를 호출하여도 된다.
// // 하지만 함수 표현식에 의해 만들어진 함수는 함수 표현식이 실행되기 전에 호출할 순 없다.

// //? 선언하기 전에 함수를 호출한다

// hey();

// // ? 함수를 선언한다

// function hey() {
//   console.log("hey.");
// }

// //! 함수 표현식

// hey2(); // 함수를 선언하기 전에 함수를 호출했다.

// const hey2 = function () {
//   console.log("hey."); // typeError: hey is not a function
// };

// * 인수 넘기기

function argument() {
  console.log("hey.");
}

// 현재 logView 함수는 인수argument나 파라미터parameter를 받지 않고 있다.

// 함수가 사용하는 변수에 대해 동적으로 값을 제공받고 싶다면

// 함수 이름 뒤의 괄호 안에 파라미터 이름을 추가해서 함수를 선언하면 된다.

function argument2(name) {
  console.log(`hey, ${name}.`);
}

argument2("park");
