const [firstAnimal] = ["캥거루", "웜뱃", "코알라"];
console.log(firstAnimal);
// 배열의 첫 번째 값을 뽑아내어 변수로 선언했다.

const [, , thirdAnimal] = ["캥거루", "웜뱃", "코알라"];
console.log(thirdAnimal);

// 콤마를 사용해 불필요한 값을 생략하는 리스트 매칭도 사용할 수 있다.
