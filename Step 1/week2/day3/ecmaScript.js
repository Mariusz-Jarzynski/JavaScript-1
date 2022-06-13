// 1
// Week 2 – Day 3 (8 z 25) – ES6 - ECMAScript 6 / 2015

// 1 - ES6 – domyślne wartości parametrów – function sum(x = 6, y = 50)
// Możemy zrobić dowolną ilość parametrów domyślnych ale muszą one być na końcu,

// 2- Destrukturyzacja w tablicach

const people = ['Testowa osoba #1',
    'Anna Kowalska',
    'Jan Nowak', // dobrze dawać na końcu tablicy przecinek
];

const person1 = people[0];
const person2 = people[1];
console.log(person1, person2);

// Destrukturyzacja

const [person11, person12] = people;
// gdy checmy wyciągnąc pierwszą i trzecią osobe to możemy dodać pusty przecinek
const [person21, , person23] = people;
// gdy jest wiecej osoób to lepiej wskazać nr danej osoby
const person32 = people[1];


// 3 -Destrukturyzacja w obiektach

const user = {
    name: 'Imię',
    surname: 'Nazwisko',
};

const name = user.name;
const surname = user.surname;
console.log(name, surname);

// Destrukturyzacja

const user1 = {
    name1: 'Ala',
    surname1: 'Kowalska',
};

const {surname1, name1} = user1; // kolejność nie ma znaczenia. Wskazujemy które zmienne wyciągamy
console.log(name1, surname1);

const {name1: userName} = user1; // wyciągamy do innej zmienej
console.log('userName: ' + userName);

user1.name1 = 'Marek';
console.log(name1);
// Wynik jest Ale a nie Marek
// Przy typach prostych gdy odwołujemy się do nich to tworzymy kopie wartości, nie łączymy ich linkami
// Przy obiektach łączymy je linkami
// Typy proste są kopiowane wartości jak są przypisywane / pobieramy kopie wartośći
// a typy złożone / referencyjne kopiowana jest ich referencja czyli link do jednego obiektu.
// Do tego obiektu może wskazywać np 10 linków


// wyciągamy do innej zmienej
const {name1: userName2} = user1;

// w starszej wersji było by tak
const userName3 = user1.name1;

console.log('userName: ' + userName2);


// 4 - Spread operator - Spread syntax(…) - lączenie tablic, obiektów

const array = [1, 2];
const array2 = [0, ...array, 3, 4];
const array3 = array2;
array3.push(5);
// pracujemy na tej samej tablicy w pamięci
// referencje czyli linki do tego samego miejsca w pamięci (tej samej tablicy, do której dodajemy lub usuwamy)

console.log(array2);
console.log(array3);

const myArray1 = [1, 2, 3];
const myArray2 = [1, 2, 3];
console.log(myArray1 === myArray2);  // = false - to są dwa różne obiekty

// object
const obj1 = {
    name: 'Jan',
    surname: 'Kowal',
};

const obj2 = {
    ...obj1,
    age: 25,
};
// ale obj2 to już jest inny obiekt (nie tak jak w tablicach)
console.log(obj2);
// możemy używać jako obiekt domyślny (tu obj1) a potem dokonywac zmian
const obj3 = {
    ...obj1,
    name: 'Adam',
};
console.log(obj3);
// uwaga kolejność ma znaczenie. Tu najpierw ustawi imię na Paweł a potem nadpisze z obj1
const obj4 = {
    name: 'Pawel',
    ...obj1,
};
console.log(obj4);


// 5 - Rest operator ---------------
console.log('--- Operator Rest ---');

const bigSum = (a, b, c, d, e, f) => {
    return a + b + c + d + e + f;
};

const result1 = bigSum(1, 2 ,3, 4, 5, 6);
console.log(result1);

// ale można łatwiej za pomocą rest
// ...rest operator - musi być jako ostatni ale może być jedyny. Rest to dowolna ilość wpisanych liczb

const sumNumbers = (...args) => {
    console.log(args);
};
// otrzymujemy tablice
sumNumbers(1);
sumNumbers(1, 2, 3);
sumNumbers();

console.log('--- gross ---'); // ------------------------

function gross(vat, ...prices) {
    console.log(vat, prices);
}

gross(23, 100, 20, 40); // pokazuje jak wygląda tak funkcja - Tylko w Chromie działa

// --- Jak chcemy dodać ten element na początek tablicy
function gross2(vat, ...prices) {
    prices.unshift(vat);
    console.log(prices);
}

gross2(23, 10, 100, 50);

console.log('--- bigSum2 ---');
// -----------------------

const bigSum2 = (...numbers) => {
    let mySum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            console.log('All elements must be numbers!');
            return; // koniec nie rób nic dalej bo to nie są liczby
        } else {
            mySum += numbers[i];
        }
    }
    console.log('Sum = ' + mySum);
    return mySum;
};

bigSum2('Liczba');
bigSum2(4, 6);
bigSum2(2, 4, 6, 8);

console.log('--- String template ---');
// 6 - String template - użycie Grawisa -------------------------

const myName = 'Jan';
const mySurname = 'Kowal'
console.log('Hello world' + myName + ' surname is ' + mySurname);

// użycie Grawis ułatwia pisanie tego
console.log(`Hello world ${myName.toUpperCase()} surname is ${mySurname}`);

console.log(`3 + 4 = ${3 + 4}`); // wynik bedzie 4;
// aby wstawić znak specjalny wstawiamy backshlesh \
console.log(`Hello \` wolrd`);

console.log("Hello. I'm Mario");
console.log('Hello. I\'m Mario');
console.log('1-Hello \n2-world');
console.log(`1-Hello 
2-world`);

console.log('---');
// ---------------------

const customerName = 'Jan';
const customerSurname = 'Nowak';

const customer = {
    name: customerName,
    surname: customerSurname,
};

console.log(user);

// Jeśli nazwa zmiennej jest taka sama jak w obiekcie to można napisac krócej:

const customerName2 = 'Pawel';
const customerSurname2 = 'Kowalski';

const customer2 = {
    customerName2,
    customerSurname2,
};

console.log(customer2);

console.log('---- new Date ---');
// 7 new Date() -----------------------

const date = new Date();
console.log(date);

console.log(date.getFullYear());
