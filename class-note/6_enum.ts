// 값을 지정하지 않으면 숫자로 지정된다.(순서대로)
enum Shoes {
    Nike, Adidas
}

var myShoes = Shoes.Nike
console.log(myShoes)

// 문자형 이넘
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike
console.log(myShoes2)


// Example
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if ( answer === Answer.No) {
        console.log('오답입니다.')
    }
}

askQuestion(Answer.Yes);