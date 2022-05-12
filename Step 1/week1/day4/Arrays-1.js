// Day 4 - Additional - Arrays 1 - Tablice 1

// Create many variables based on contents of array
// Get variable out of array.
// instanceof

// How we can create an array. There are 4 ways how we can create an array:

// 1 - empty array
const gameItem1 = [];

// 2
const myArray = [1, 34, 'Janek'];

// 3 Constructor - empty array
const gameItmes = new Array();

// 4 Constructor with items
const colors = new Array('red', 'blue');
console.log(colors);

// W każdych z tych powyższych sposobów powstaje instancja Tablicy o tych samych właściwościach i metodach
// (co widzimy po konstruktorze)

const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = 'first const';
myArrayLet[0] = 'first let';

// When we use a let we can convert array into different typ like String. Array disappear
myArrayLet = 'nowy tekst';

// Wnen we use const, we can not change array. Always will be an array. We can modify items in this array
// myArrayConst = 'nowy tekst';  - we can not change array into String

// Removing itmes from arrays
const plainArray = ['John', 'Adam', 'Paul', 'Anna'];
console.log('Array length: ' + plainArray.length + " - "  + plainArray);

// delete - remove only value from array but index still exist
delete plainArray[2];
console.log('Array length: ' + plainArray.length + ' - ' + plainArray);
console.log(plainArray[2]);

// splice - cut array so remove value and index. We can declare cut array to new variable which will be array
console.log('\n splice \n')

const arrayToDelete = ['Ala', 'Paul', 'Joe'];
console.log('Array length :' + arrayToDelete.length + ' - ' + arrayToDelete);
const deletedItem = arrayToDelete.splice(2);
console.log('Array length: ' + arrayToDelete.length + ' - ' + arrayToDelete);
console.log(deletedItem);

// Array cleaning
console.log(' --- Array cleaning ---- ');

const cleanArray = ['Donald', 'Paul', 'John'];
console.log(cleanArray.length + ' - ' + cleanArray);
// cleanArray = []; - tak nie można bo to jest przypisanie Nowej tablicy a przy const tak sie nie da
cleanArray.length = 0; // tak zerujemy czyścimy tę samą tablice. To ta sama tablica, to samo miejsce w pamięci
console.log(cleanArray.length + ' - ' + cleanArray);

// Check if it is instance of it
console.log('--- instanceof ---');

const myArray5 = [2, 5, 7];

myArray5 instanceof Number;
myArray5 instanceof String;
myArray5 instanceof Object;
myArray5 instanceof Array;
myArray5 instanceof Function;
console.log(myArray5 instanceof Number);
console.log(myArray5 instanceof String);
console.log(myArray5 instanceof Object);
console.log(myArray5 instanceof Array);
console.log(myArray5 instanceof Function);

// Check if this is array
console.log('--- Check if this is array ----');

Array.isArray(myArray5);
console.log(Array.isArray(myArray5));


console.log('--- many variables ----')
// Stworzenie wielu zmiennych w oparciu o zawartość tablicy (i obiektu)
// Czyli kilka tablicy po przecinku
const [nameUser, idUser, ageUser] = ['John', 210, 22];

// to tak jak by pojedynczo tworzyć tablice
// const nameUser = ['John'];
// const idUser = [210];
// const ageUser = [22];
console.log('Array nameUser :  ' + nameUser);

// --------- Wyciąganie danych z tablicy i przypisywanie ich do zmiennych
console.log(' \n--- Wyciąganie danych z tablicy i przypisywanie ich do zmiennych -- ');

const game = [120.12, 87, 'Paul'];
let [time, points, name] = game;

console.log(time + ' ' + points + ' ' + name);
