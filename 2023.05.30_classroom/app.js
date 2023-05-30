let pokemon = "피카츄";

function changePokemon(pokemonElement) {
  if (pokemon === "피카츄") {
    pokemon = "야도란";
  } else {
    pokemon = "피카츄";
  }
  pokemonElement.textContent = pokemon;
}

// DOMContentLoaded 이벤트는 HTML 문서를 로드하고 DOM 트리를 완성했을 때 발생한다.

document.addEventListener("DOMContentLoaded", function () {
  // 문서 요소 식별, 리액트 스타일의 방식
  const root = document.getElementById("root");
  // 요소 생성
  const pokemonContainer = document.createElement("div");
  pokemonContainer.id = "pokemonContainer";
  // 요소 생성
  const pokemonElement = document.createElement("h1");
  pokemonElement.id = "pokemon";
  pokemonElement.textContent = pokemon;
  // 요소 생성
  const changeButton = document.createElement("button");
  changeButton.id = "changeButton";
  changeButton.textContent = "Change Pokemon";

  // 구분을 위해 id 값을 추가하였으나, 식별할 수 있다면 무엇이든 상관 없다.

  // 이벤트 리스너의 콜백 함수를 재사용하기 위해
  // 위의 미리 선언된 함수를 사용
  // 호출한다고 표현하지 않고, 참조한다고 표현한다.

  changeButton.addEventListener("click", () => changePokemon(pokemonElement));

  pokemonContainer.appendChild(pokemonElement);
  pokemonContainer.appendChild(changeButton);
  root.appendChild(pokemonContainer);
});

// 실행하였을 때, 오류 발생.
// 주어진 코드에서 changePokemon 함수 안에서 pokemonElement에 접근하고자 하고 있지만
// pokemonElement 변수가 changePokemon 함수의 스코프 내에서 정의되지 않았기 때문에 오류가 발생했다.

// 해결하기 위해서는 pokemonElement 변수를 changePokemon 함수의 스코프 내에서 사용할 수 있도록 해야 한다.
// 이를 위해 pokemonElement 변수를 상위 스코프에서 정의하고
// changePokemon 함수의 인자로 전달하거나, changePokemon 함수를
// pokemonElement가 정의된 스코프 안에서 정의하는 방법을 선택할 수 있다.
