// ES2015(ES6) 부터 생김
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var capt = new Person('캡틴', 100);


class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.age = age;
        this.name = name;
    }
}

var seho = new Person('세호', 30); // 생성 되었습니다.

// Javascript는 ProtoType 기반 언어이다..
// 프로토 타입을 기반한 상속
var user = { name: 'capt', age: 100};
var admin = { name: 'capt', age: 100, role: 'admin'};

var admin2 = {};
admin2.__proto__ = user;
admin2.name;
admin2.age;
admin2.role = 'admin';
console.log(admin2)

// 프로토 타입 활용
// object mdn
