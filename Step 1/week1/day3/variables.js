// Dodając liczbe i String zostanie zamieniene na String i nastąpi łącznie czyli konkatenacja
// w wynik bedzie String
'4' + 4;
console.log('4' + 4);

// Rzutowanie Convert czyli zamiana jednego typu danych na inny

// Mnożąć String przez number wynik będzie typu number
// Dodając String do number wynik będzie typu String

// Mnożąc String przez 1 zamienimy na number czyli wynik bedzie Number
'2' * 1;

// lub metoda Number do rzutowania / zamiany
Number('2');

console.log('2' * 1);

// const - tworzymy zmienną o danej wartości której potem nie możemy zmienić
const name = 'Bartek';
// let - tworzymy zmienną którą potem możemy zmienić
let  surmane = 'Kowalski';

console.log(name, surmane);

surmane = 'Nowak';

console.log((name + ' ' + surmane));

// deklaracja zmiennej - variable declaration
let address;
// inicjalizacja, przypisanie wartości - assignment
address = 'Warszawa';

// Przy const musi być odrazu inicjalizacja - join variable declaration and assignment
const city = 'war';

// ----------------
// Day 3 - additional - variables - zmienne
console.log(' \nDay 3 - additional - variables - zmienne');

// Deklarownie wielu zmiennych po przecinku | Declare many variables
let name1 = "Bartek", name2 = 'Adam';
const surname1 = 'Jar', surname2 = 'War';

let myName, mySurname = 'Kowalski', myAddress; // z const tak tworzyc zmiennych nie można
console.log(mySurname);

//const na obiektach
console.log(' \nconst na obiektach')

const myArray = [1];
console.log(myArray);
// nie bedzie możliwe przypisanie nowego obiektu do tej zmiennej. Przy let można
// myArray = [1,2]; - to jest błąd
// ale jest możliwa edycja utworzonego obiektu czyli dodawanie indeksów, usuwanie, edycja itp
myArray[1] = 2;
console.log(myArray);

// --------------------
// Day 3 - additional - operators  operatory
console.log(' \nDay 3 - additional - operators - operatory');

let position = 5;
position += 10;     // oznacza to samo co position = position + 10; czyli teraz positoin = 15;
console.log('Wynik positon = ' + position);

position -= 6;    // oznacza position = positon -6; czyli wynik 9
console.log('Wynik powinien być 9 tak : ' + position);

// Modulo - reszta z dzielenia - change from division
console.log('Modulo - reszta z dzielenia')

console.log('Reszta z dzielenia 10 / 8 powinno być 2 a jest:')
console.log(10 % 8);  // reszta z dzielenia 10 przez 8 = 2 czyli reszta

// operator porównania - czy są równe?

'2' == 2 // true - dokonuje konwersji typów czyli sprowadza do tego samego typu danych i wtedy porywnuje wartości
'2' === 2 // false - bez konwersji typów, a więc porównuje też typ. Jak są różne typy danych to jest false

// operator różne od
100 != 101 // true

'100' != 100 // false - 2 znaki a zatem dokonuje konwersji typów i sprawdza
'100' !== 100 // true - nie dokonuje konwersji więc prawda bo to są rózne typy danych

// ! sam wykrzyknik to negacja, zaprzeczenie
// Negacja czyli nie to sam wykrzyknik !
// Logiczne zaprzeczenie (negacja) zamienia na typ boolean i odwraca
!1 // false
!0 // true

console.log('Operator trójargumentowy');
// Operator warunkowy (trójargumentowy)
// warunek ? zróbToJakPrawda : zróbToJakFałsz

3 > 2   ? 'tak' : 'nie';
3 === 2 ? 'tak' : 'nie';

console.log('3 > 2   ? \'tak\' : \'nie\'  wynik to:  ' + (3 > 2 ? 'tak' : 'nie'));
console.log('3 === 2 ? \'tak\' : \'nie\'  wynik to:  ' + (3 === 2 ? 'tak' : 'nie'));

// warunek ?  Prawda : Fałsz

console.log(3 > 2 ? 'Tak to prawda' : 'Nie to nie jest prawda');
console.log(3 < 2 ? 'Tak to prawda' : 'Nie to nie jest prawda');
