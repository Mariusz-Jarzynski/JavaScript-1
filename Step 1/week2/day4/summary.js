// 4
// function, object, constructor, class

const name1 = "Jan";

// po funkcji i clasie nie stawiamiy średnika a po obiekcie stawiamy

//----------------------------------------
// function
function sum(a, b) {
    return a + b;
}

const bigSum = function (c, d) {
    return c + d;
}

const bigSum2 = (e, f) => {
    return e + f;
}

const bigSum3 = (g, h) => g + h;

const bigSum4 = k => k ** 2;

//-----------------------------------------
// object
const obj = {
    name: 'Jan',
    surname: 'Kowal',
    'user id': 25,
    user_age: 40,  // lepiej tak zapisywać
    // funkcja w obiekcie nazywa się metodą
    sayHey1: function () {
        console.log('Hey1');
    },
    sayHey2: () => {         
        console.log('Hey2');
    },
    mySum: (x, y) => x + y,

    // ES6 - new way for method in an object
    sayHey3() {
        console.log('Hey3');
    },
};

// update
obj.age = 65;
// add new property to object
obj.sex = 'male';
// remove a property
delete obj.sex;

console.log(obj.name.toUpperCase());
console.log(obj['name']); // lepiej odwoływać tak jak powyżej

console.log(obj['user id']); // tak się odwoływujemy do właściwości ze spacją

console.log(obj);

// -------------
// object in function - day3 - exercises

// -----------------------------------------
// constructor
function Person(newName, newSurname) {
    this.name = newName;
    this.surname = newSurname;
    this.sayHelloPerson = function () {
        console.log('Hello2 from ' + this.name + ' ' + this.surname);
    };
}

const person1 = new Person('Karol', 'Kowalski');
const person2 = new Person('Magda', 'Skok');

person1.name;
console.log(person1.surname);
person1.sayHelloPerson();

// --------------------------------------------
// class
class Player {
    sayPlayer() {
        console.log('Say Player');
    };
}

const player1 = new Player();
const player2 = new Player();

player1.sayPlayer();

// deafault there is a empty constructor in class
class SmallPlayer {
    constructor() {

    };
}

// constructor
class BigPlayer {
    constructor(playerName, playerSurname) {
        this.name = playerName;
        this.surname = playerSurname;
    };
}

const bigPlayer1 = new BigPlayer('Adam', 'Woda');


