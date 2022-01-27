// JS 문자열 
// let str = 'hello';

//TS 문자열(변수의 오른쪽에 : 붙이고 타입)
let str: string = 'hello';


// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let heros: Array<string> = ['captain', 'Thor', 'Hulk'];
//배열 리터럴
let items: number[] = [1,2,3];

// TS Tuple (배열의 인덱스의 타입까지 지정)
let address: [string, number] = ['gangnam', 1];

// TS 객체(객체의 상세 타입까지 지정할 수 있다.)
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };

let person: {name:string, age: number}= {
    name: 'capt',
    age: 100
}

// TS 진위값(true, false)
let show: boolean = true;