// 타입 단언 (type assertion) - as type
var aa;
aa = 20;
aa = 'a';

// 타입 스크립트의 타입 추론 말고 임의로 타입을 지정 하는 것
var b = aa as string;

// DOM API 조작
//<div id="app"></div>
var div = document.querySelector('div') as HTMLDivElement;
if ( div ) {
    div.innerText
}