// 스프레드 연산자는 3개의 점 (...) 으로 이루어진 연산자로
// 몇 가지 다른 역할을 갖고 있다.

// 1. 스프레드 연산자를 사용해 배열의 내용을 조합할 수 있다.

const peaks = ["대청봉", "천왕봉", "소청봉"];
const canyons = ["천불동계곡", "가야동계곡"];
const seoraksan = [...peaks, ...canyons];

console.log(seoraksan.join(", ")); // 대청봉, 천왕봉, 소청봉, 천불동계곡, 가야동계곡

// 2. 스프레드 연산자를 사용해 배열의 나머지 원소들을 얻을 수 있다.

const lakes = ["경포호", "화진포", "나로호", "청초호"];
const [first, ...rest] = lakes; // 첫번째 원소에 "경포호"를 할당, 나머지 원소는 lakes 안의 원소를 가져온다.

console.log(rest.join(", ")); // 화진포, 나로호, 청초호

// 3. 다음 코드는 n개의 인자를 스프레드 연산자를 사용해 배열로 모은 다음
//    그 배열을 사용해 여러 가지 내용을 콘솔 메세지로 찍는 함수이다.

function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();

  console.log(`${args.length} 도시를 운행합니다.`);
  console.log(`${start}에서 출발합니다.`);
  console.log(`목적지는 ${finish}입니다.`);
  console.log(`중간에 ${stops.length} 군데를 들립니다.`);
}

console.log(directions("서울", "수원", "천안", "대전", "대구", "부산"));


// direction 함수는 스프레드 연산자를 사용해 인자를 받는다.
// 첫 번째 인자는 start 변수에 대입된다.
// 마지막 인자는 finish 변수에 Array.reverse를 통해 대입된다.
// 그 후, args의 배열의 length를 사용하여 얼마나 많은 도시를 지나는지 보여준다.
// 목적지에 가는 동안 들러야 하는 도시의 수는 args 배열에서 2(출발지와 도착지)를 뺀 것이다.
