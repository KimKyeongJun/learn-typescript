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

//인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}

const obj: Dropdown = {
    value: 'abc', selected: false
};

interface DropdownGeneric<T> {
    value: T;
    selected: boolean;
}

const objGeneric: DropdownGeneric<string> = {
    value: 'abc', selected: false
}

// 타입 제한1 - 제너릭의 타입 제한
function logTextLength<T>(text: T[]):T[] {
    console.log(text.length);
    return text;
}

// 타입 제한2 - 정의된 타입으로 타입을 제한하기
interface LengthType {
    length: number;
}

function logTextLEngth<T extends LengthType>(text: T):T {
    text.length
    return text;
}

// logTextLength(10)
// logTextLength({leng: 10})


// 제너릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

// name
// price
// stock
getShoppingItemOption('name');

