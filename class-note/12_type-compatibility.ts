// 타입 호환

// 인터페이스와 클래스
interface TypeCompatibilityDeveloper {
    name: string;
    skill: string;
}

interface TypeCompatibilityPerson {
    name: string;
}

class TypeCompatibilityPersonClass {
    name: string;
}

var developer: TypeCompatibilityDeveloper;
var person: TypeCompatibilityPersonClass;

// Err : 'skill' 속성이 'Person' 형식에 없지만 'Developer' 형식에서 필수입니다.
//developer = person;

// Person이 구조적으로 더 작은 타입(부분 집합)이기 때문데 사용 가능!
person = developer;

// 함수
var add = function(a: number) {
    console.log(a);
    // ...
}

var sum = function(a: number, b:number) {
    //return a + b;
    // ...
}

// sum이라는 함수가 add라는 함수보다 더 크다.(포함하고 추가적으로 옵션을 더 제공한다.)
// Err 
//add = sum;
sum = add;


// 제너릭
interface Empty<T> {
    //...
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// Err 'NotEmpty<number>' 형식은 'NotEmpty<string>' 형식에 할당할 수 없습니다. 'number' 형식은 'string' 형식에 할당할 수 없습니다
// notempty1 = notempty2;
