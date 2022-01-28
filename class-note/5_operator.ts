// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

//TypeScript UnionType(파라미터나 변수에 1가지 이상의 타입을 사용하고 싶을 때 파이프 사용)


var seho: string | number | boolean;
function logMessage(value: string | number) {

    // 타입에 맞는 API 호출이 가능하다.
    if (typeof value === 'number') {
        value.toLocaleString()
    }

    if ( typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

// UnionType의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // 공통 속성만 제공한다.
    //someone.name

    // 각 특성은 제공되지 않음(타입 가드를 이용해서 사용해야함)
    // someone.skill
    // someone.age
}

// & Intersection Type
// 불가능한 타입
var capt: string & number & boolean;


function askSomeone2(somone: Developer & Person){
    // Developer와 Person의 속성을 포함한 타입이 파라미터로 들어와야함
    // name, skill, age를 모두 포함한 Parameter가 넘어와야함
}


//유니온 타입과 인터섹션 타입의 차이점
askSomeone({name: 'Developer', skill: '웹 개발'})
askSomeone({name: 'Developer', age: 100})

askSomeone2({name: 'Developer', skill:'웹 개발', age: 100})