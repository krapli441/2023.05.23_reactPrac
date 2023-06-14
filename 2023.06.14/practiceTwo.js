let ulElement = "<ul>";

// li 요소(element)들 생성
let liFirst = "<li>첫 번째 리스트</li>";
let liSecond = "<li>두 번째 리스트</li>";
let liThird = "<li>세 번째 리스트</li>";

// li 요소(element)들을 ul 요소(element)에 추가함.
ulElement += liFirst;
ulElement += liSecond;
ulElement += liThird;

ulElement += "</ul/>";

// ul 요소 (element)를 body에 추가 (또는 다른 대상 요소에 추가)
document.body.innerHTML = ulElement;
