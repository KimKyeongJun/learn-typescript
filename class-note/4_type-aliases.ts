interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

var seho: Person = {
    name: '세호',
    age: 10
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean}

function getTodo(todo: Todo) {

}


// 인터페이스와 타입 별칭의 타입
// 타입 별칭은 새로운 타입 값을 하나 생성하는것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는것과 같다.
// 타입은 확장이 불가능하다.