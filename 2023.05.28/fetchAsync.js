const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&result=1");
  let { results } = await res.json();
  console.log(results);
};

getFakePerson();

// 비동기 프라미스를 처리하는 다른 방법으로 async 함수를 사용하는 방법이 있다.
// async를 사용하는 코드는 전통적인 동기 방식의 코드와 비슷하기 때문에
// async를 선호하는 개발자도 있다.
// then 함수를 연쇄적으로 호출해 프라미스의 결과를 기다리는 대신
// async 함수는 프라미스 다음에 있는 코드를 실행하기 전에
// 프라미스가 끝날 때까지 기다리라고 명령할 수 있다.

