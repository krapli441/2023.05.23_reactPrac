function logView() {
  console.log("함수를 제작하였다.");
}

logView(); // 선언한 함수를 호출하여 실행할 수 있다.

//

const log = function () {
  console.log("함수 표현식으로 함수를 제작했다.");
};
log();

// 함수를 만드는 다른 방법으로, 함수 표현식이 있다.
// 함수 표현식은 (이름 없는) 함수를 제작하며, 변수에 값을 대입할 수 있다.

// 함수 선언은 호이스팅되지만, 함수 표현식은 호이스팅되지 않는다.
// 즉, 함수 선언을 작성하기 전에 함수를 호출하여도 된다.
// 하지만 함수 표현식에 의해 만들어진 함수는 함수 표현식이 실행되기 전에 호출할 순 없다.

//? 선언하기 전에 함수를 호출한다

hey();

// ? 함수를 선언한다

function hey() {
  console.log("hey.");
}

//! 함수 표현식

hey2(); // 함수를 선언하기 전에 함수를 호출했다.

const hey2 = function () {
  console.log("hey."); // typeError: hey is not a function
};
