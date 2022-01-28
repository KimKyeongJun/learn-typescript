// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('하이');
// logText(true);



// 호출하는 시점에 타입을 넘겨줌
// function logText<T>(text: T):T {
//     console.log(text)
//     return text;
// }

// // 인자의 타입은 string이다.
// logText<string>('하이');

// 기존 타입 선언 방식과 제너릭의 차이점
// function logText(text: string) {
//     console.log(text);
//     return text;
// }

// function logNumber(num: number){ 
//     console.log(num);
//     return num;
// }
// logText('a');
// logNumber(10);
// logText(true)

// Union Type의 단점
// function logText(text: string | number) {
//     // 타입에 제공되는 공통된 API만 접근할 수 있다.
//     console.log(text);
//     return text;
// }

// logText('a');
// logText(10);

// 제너릭의 장점과 타입 추론에서의 이점
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

// 타입이 제공하는 함수의 API를 확인할 수 있다.
// 동일한 함수에 대해서 타입이 변경되어도 재사용 할 수 있다.
const abc = logText<string>('a');
const num = logText<number>(10);