// Day 5 – if, obiekt String, ćwiczenia
console.log('Day 5 - if, String, exercises  \n');

// rzutowanie czyli zamiana typu na inny
let a = '24';
console.log(typeof a);
Number(a);
console.log(typeof (Number(a)));

console.log(Number('15'));

// Operacje na String
// toUpperCase()

new String('String - Hello world').toUpperCase();
'Hello world'.toUpperCase();

console.log(new String('String - Hello world').toUpperCase());
console.log('Hello world'.toUpperCase());

// toLowerCase
console.log('HELLO WORLD'.toLowerCase());

// repeat() - displaying indicated number times some Sting

'Hello world'.repeat(3);
console.log('Repeat - Hello world '.repeat(3));

// replace()

'Replace - Hello world'.replace('world', 'Mega Kurs');
console.log('Replace - Hello world'.replace('world', 'Mega Kurs'));

// trim - remove white marks (ex. space) from the beginning and the end
' Trim - Hello world '.trim();
console.log(' Trim - Hello world ');
console.log(' Trim - Hello world '.trim());

const name = 'Bartek';
console.log(name);
console.log(name.toUpperCase());
console.log(name);
const nameUpperCase = name.toUpperCase();
console.log(nameUpperCase);

// length

'Janek'.length;
console.log('Janek'.length);

// .toUpperCase() - to metoda (ma na końcu nawiasy) wywoływana na obiekcie
// .length - feature - właściwość, cecha

// slice - cut from index number to < index number . Index starts from 0
const name1 = 'Bartek';
// name1Slice = 0-B, 1-a, 2-r, not index 3 Therefore will be Bar
const name1Slice = name1.slice(0,3);
console.log(name1);
console.log(name1Slice);

// slice(3) - with only 1 parameter means from this index to the end. Therefore will be tek
const name1Slice2 = name1.slice(3);
console.log(name1Slice2);

// slice(2, -2) - można podawać z minusem i liczy np dwa do końca


// kopia tablicy - czyli wyciąć wszyskto od wskazanego nr indexu i przypisać do nowej tablicy

const arrayCopy = name1.slice(0);

// concat - łączenie
'Hello'.concat(' World');
console.log('Hello'.concat(' World'));

'Hello' + ' World';
console.log('Hello' + ' World');

// to co odbieramy z prompt to jest to String
// z tekstu robimy liczbe
// parseInt() and parseFloat()
console.log('\n parseInt and parseFloat \n');

parseInt('2');
parseFloat('2.25');

const val1 = '2';
const val2 = parseInt(val1);
console.log(typeof val2);
console.log(val2);

// tu wyskoczy Nan. Nie da się znaku + w Stringu zamienić na Number
const val3 = '+';
const val4 = parseInt(val3);
console.log(typeof val4);
console.log(val4);

// Number() - prostszy sposób zamiany String na liczbe
const value1 = '24'
const val5 = Number(value1);
console.log(typeof val5);
console.log(val5);

// wyciąganie pojędyńczych liter ze Stringa
'Hello world'[1];

console.log('Hello world'[1]);

// mozna napisać w nawiasach kwadratowach ale trzeba w podwójnym cudzysłowiu
"hello world"["length"]

// to to samo co
'hello world'.length;

// grawis - backtick - możemy użyć wyrażenia JavaScript (z metodą)
const tekst = 'Czesc';

const tekst2 = `Tutaj moje ${tekst.toUpperCase()} dla Ciebie`;
console.log(tekst2);


console.log('--- long string ---');
// long string - means string in two or more lanes

const myMessage = 'Ala ma kota ' +
    'ktorego kupila w grudniu ' +
    'w Warszawie';

console.log(myMessage);
console.log('---');

const tekst1 = 'Janek kupil nowy \
samochod ktory jest koloru \
bialego';

console.log(tekst1);

// compare
console.log('\n--- compare ---');

const user1 = new String('Adam');
const user2 = new String('Adam');

const user3 = 'Adam';
const user4 = 'Adam';

console.log(typeof user1);  // object
console.log(typeof user2);  // object

console.log(typeof user3);  // string
console.log(typeof user4);  // string

console.log('---');

console.log(user1 == user2);    // false
console.log(user1 === user2);   // false

console.log(user3 == user4);    // true
console.log(user3 === user4);   // true

console.log(user1 == user3);    // true
console.log(user1 === user3);   // false

console.log('---')
// valueOf() - returns value of the string Object and it is String
const user5 = user1.valueOf();
console.log(typeof user5);      // String

console.log(user5 == user3);    // true

// przejrzeć pliki zrodlowe do filmu String głównie metody