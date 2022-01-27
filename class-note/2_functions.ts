// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a+b;
// }

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

//함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a+b;
}

//함수 파라미터의 갯수보다 더 많은 인자를 넣은 경우(js와 차이점 : 파라미터의 갯수를 제한함)
//sum(10, 20, 30, 40);


// 함수의 옵셔널 파라미터(파라미터에 물음표를 붙인다!)
function log(a: string, b?: string, c?: string) {
    return a+b;
}
log('hello world');
log('hello ts', 'aaaa');


