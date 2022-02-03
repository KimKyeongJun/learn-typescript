interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}


// 공통된 속성만 접근할 수 있다.
function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

// Return Type : Developer or Person
var tony = introduce();


// 코드의 가독성이 떨어진다.
if((tony as Developer).skill) {
    console.log((tony as Developer).skill)
} else if ( ((tony as Person).age)) {
    console.log((tony as Person).age)
}


// 타입 가드의 소개와 적용(is)
// function is해당타입
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill != undefined;
}

if ( isDeveloper(tony)) {
    tony.skill
} else {
    tony.age
}