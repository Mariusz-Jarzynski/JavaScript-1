// 1
// Week 2 – Day 4 (9 z 25) – Class

function Person() {
    this.sayHello = function () {
        console.log('Hello');
    };
}

const alice = new Person();
alice.sayHello();

// clsss

class User {
    sayHey() {               // funkcja w obiekcie nazywa się metodą
        console.log('Hey');
    };
    setAge() {

    };
}

const mike = new User();
mike.sayHey();


// ---------------
// domyślnie w class jest pusty konstruktor
class User1 {
    constructor() {

    };
}

// ten konstuktor faktycznie wygląda tak
function User1() {

}

// --------