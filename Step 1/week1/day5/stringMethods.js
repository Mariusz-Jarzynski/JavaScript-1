// "use strict"
// Metody obiektu String - Every method returns a new string. It is important if we use small or capital letters

// String methods

// Number();
// parseInt() and parseFloat();
// toUpperCase(); and toLowerCase();
// length();
// slice();
// concat();
// String is an array, so we can take out one element from it

// 1 charAt   and   charCodeAt
// 2 lastIndexOf();    and   indexOf();
// 3 search(); similar to indexOf();
// 4 substring(); - create a new String from index to index but without last index number
// 5 includes - whether contain provide string or not - returns true or false
// 6 replace() - returns new String
// 7 repeat() - create new String by repeat String
// 8 startsWith(); and endsWith(); - returns true of false
// 9 trim(); trimStart(); trimEnd();
// 10 split() - divide String and put into an Array
// 11 padStart(); and padEnd();
// 12 join();
// 13  A few method to obtain a reversed String
// reverse();
// 14 split();

let car = 'Mercedes';
console.log(car[1]);

// long String - means  string in two or more lanes

let myMessage = 'Ala ma kota ' +
    'ktory ciagle ' +
    'chce się bawić';

// ----------

// 1 charAt   and   charCodeAt
console.log('-- charAr();  and  charCodeAt(); --');

const tekst1 = 'Heloł';
console.log(tekst1.charAt(0));      // returns mark, for 0 is H
console.log(tekst1.charAt(1));      // returns mark, for 1 is e

console.log(tekst1.charCodeAt(0));  // returns Unicode mark, 72
console.log(tekst1.charCodeAt(1));  // returns Unicode mark, 101

// 2 lastIndexOf();    and   indexOf();
console.log('-- lastIndexOf();  and  indexOf(); --');

const tekst2 = 'Good morning, good evening';
console.log(tekst2.indexOf('od'));
console.log(tekst2.lastIndexOf('od'));

console.log('---');
console.log(tekst2.indexOf('evening'));
console.log(tekst2.lastIndexOf('evening'));

console.log('---');
console.log(tekst2.indexOf(' '));
console.log(tekst2.indexOf('t'));

// 3 search(); similar to indexOf();
console.log('--- search(); ---');
console.log(tekst2.search('od'));

// 4 substring(); - create a new String from index to index but without last index number
console.log('--- substring() ---');

const tekst3 = 'Good morning, Good evening';
const newString = tekst3.substring(5, 18);
console.log(newString);
const newString2 = tekst3.substring(19, tekst3.length - 1);
console.log(newString2);
const newString3 = tekst3.substring(5);
console.log(newString3);

// 5 includes - wheather contain provide string or not - returns true or false
// second index number is optional, from which should start checking, default is from index 0
console.log('--- includes() ---');

const tekst4 = 'You are no 25 in the queue';
console.log(tekst4.includes('25'));
console.log(tekst4.includes(25));
console.log(tekst4.indexOf('2'));
console.log(tekst4.includes('25', 12)); // start checking from index no 12

// 6 replace() - returns new String
console.log('--- replace(); ---');
const tekst5 = 'You are no 45 in the queue';
const newStrringReplace = tekst5.replace('45', '10');
console.log(newStrringReplace);

// 7 repeat() - create new String by repeat String
console.log('--- repeat(); ---');

const tekst6 = 'Hi John ';
const newStringRepeat = tekst6.repeat(3);
console.log(newStringRepeat);

// 8 startsWith(); and endsWith(); - returns true of false
console.log('--- startsWith();');
const tekst7 = 'Tom has a cat and Paul has a dog';
console.log(tekst7.startsWith('Tom'));
console.log(tekst7.startsWith('has'));

console.log('--- endsWith();')
console.log(tekst7.endsWith('dog'));
console.log(tekst7.endsWith('Paul'));

// 9 trim(); trimStart(); trimEnd();
console.log('--- trim(); ');
const tekst8 = ' Tom has bought a new car ';
const newTrim = tekst8.trim();
console.log(newTrim);

console.log('--- trimStart();');
const newTrimStart = tekst8.trimStart();
console.log(newTrimStart);
const newTrimStart2 = tekst8.trimStart() + '-';
console.log(newTrimStart2);

console.log('--- trimEnd();');
const newTrimEnd = tekst8.trimEnd();
console.log(newTrimEnd);
const newTrimEnd2 = tekst8.trimEnd() + '-';
console.log(newTrimEnd2);

// 10 split() - divide String and put into an Array
console.log('--- split();');

const tekst9 = 'Tom, Paul, Kate and Anna';
console.log(tekst9);
const newSplit = tekst9.split();
console.log(newSplit);
console.log(' - length equals = ' + newSplit.length)
const newSplit2 = tekst9.split(' '); // we need put empty String, space to divide by space
console.log(newSplit2);
console.log(' - length equals = ' + newSplit2.length)
const newSplit3 = tekst9.split(','); // divided by comma
console.log(newSplit3);
console.log('- length is = ' + newSplit3.length);

// 11 padStart(); and padEnd();
console.log('--- padStart();');

const user1 = '13';
console.log(user1);
console.log('length is = ' + user1.length);
let padStart = user1.padStart(5);
console.log(padStart);
console.log('length is = ' + padStart.length);

console.log(user1);
console.log('length is = ' + user1.length);
let padStart2 = user1.padStart(7, '25'); // stretch string by required index puting provided
console.log(padStart2);
console.log('length is = ' + padStart2.length);

console.log('--- padEnd();');
console.log(user1);
console.log('length is = ' + user1.length);
let padEnd1 = user1.padEnd(5, 'ab');
console.log(padEnd1);
console.log('length is = ' + padEnd1.length);

// 12 join(); - make String from an Array
console.log('--- join();');

const myArray = [12, 25, 15];
console.log(myArray);
const join1 = myArray.join(' - ');
console.log(join1);
const join2 = myArray.join('');
console.log(join2);

// 13  A few method to obtain a reversed String
// reverse();
console.log('--- reverse();');

const myArray2 = ['a', 'b', 'c'];
console.log(myArray2);
const reversedString = myArray2.reverse();
console.log(reversedString);

console.log('---');
const password = 'Haslo'.split('').reverse().join('');
console.log(password);

// 14 split(); - divide String and create arrays
console.log('--- 14 split() ---');

const myNames = 'John, Stasiek, Zbyszek';
console.log(myNames);
console.log(myNames.split()); // move String into Array
console.log(myNames.split(', '));  // divide by comma
console.log(myNames.split(''));
console.log(myNames.split(' '));
console.log(myNames.split('k'));
console.log(myNames.split('', 10));  // wydzielamy tylko 10 elementów, nowa tablica ma 10 elementow

