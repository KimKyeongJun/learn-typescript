// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2 인터페이스와 제너릭을 이용한 타입 추론 방식

// interface TypeDropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: TypeDropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3 복잡한 구조에서의 타입 추론 방식
interface TypeDropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends TypeDropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'hello',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// 가장 적절한 타입(Best Common Type)
var arr = [1, 2, true, true, true, 'a'];

// TypeScript Language Server
// Intellisense
// Language Extensions