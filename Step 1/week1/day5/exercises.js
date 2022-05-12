// day 5 -  do cwiczen plik

// String methods

let myText = 'Hello world';
let stringNumber = '24';

// Number();
// parseInt() and parseFloat();
// toUpperCase(); and toLowerCase();
// repeat();
// replace();
// trim();
// length();
// slice();
// concat();
// String is an array, so we can take out one element from it
// valueOf();

let car = 'Mercedes';
console.log(car[1]);

// long String - means  string in two or more lanes

let myMessage = 'Ala ma kota ' +
    'ktory ciagle ' +
    'chce się bawić';

// ----
console.log('--- valueOf(); ---');

const user1 = 'Adam';           // string
const user2 = user1;            // string
const user3 = user1.valueOf();  // string - valueOf() zwraca stringa

const user4 = new String('John');   // object
const user5 = user4;                     // object
const user6 = user4.valueOf();           // string - valueOf() zwraca string

console.log(user1 + " " + typeof user1);    // string
console.log(user2 + " " + typeof user2);    // string
console.log(user3 + " " + typeof user3);    // string - valueOf() zwraca string
console.log('---');
console.log(user4 + " " + typeof user4);    // object
console.log(user5 + " " + typeof user5);    // object
console.log(user6 + " " + typeof user6);    // string - valueOf() zwraca string

// -----
console.log(' --- ');

