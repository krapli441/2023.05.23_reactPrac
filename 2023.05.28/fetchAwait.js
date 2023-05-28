const getFakePerson = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&result=1");
    let { results } = await res.json();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

getFakePerson();

// async와 await을 사용할 때는
// 프라미스 호출 주변을 try ... catch문으로 둘러쌓아
// 정상적으로 완료되지 않은 프라미스에서 발생한 오류를 처리할 필요가 있다.
