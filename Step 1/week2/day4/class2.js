// 2

// tu jest to co było kiedyś przed 2015
function Person() {

}
// prototype - sposób na dziedziczenie w JavaScript
Person.prototype.sayHello = function () {
    console.log('Hello');
};

const bartek = new Person();
const jakub = new Person();

bartek.sayHello();
jakub.sayHello();


// tu jest nowe obecne
class Person2 {
    sayHey() {
        console.log('Hey');
    };
}

// -------------------

function Person3(name) {
    this.name = name;
}

const paul = new Person3('Paul');


// -------- w clasie w nowym zapisie, jeśli do utowrznie obiektu wymagany jest cos np imie to tworzymy konstruktor
class Person4 {
    constructor(name) { // ten konstruktor to jest ten stary construktor - function Person()
        this.name = name;
    };
}

const adam = new Person4('adam');

// -----------