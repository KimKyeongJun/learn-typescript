// function fetchItems(): string [] {
//     var items = ['a', 'b', 'c'];
    
//     return items;
// }

// let result = fetchItems();
// console.log(result);

// Promise는 Generic을 이용한다
function fetchItems(): Promise<string[]> {
    var items: string[] = ['a', 'b', 'c'];

    return new Promise(function(resolve) {
        resolve(items)
    });
}

fetchItems();