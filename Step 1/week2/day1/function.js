// Day 1 - Function

// funkcj sumy

function message() {
    console.log('Hello world');
}

// aby wywołać funkcje trzeba wypisać jej nazwe
message();
message();

//--------
const name = "Janek";
const surname = 'Kot';

function greetUser(name, surname) {
    console.log('Hello, ' + name + ' ' + surname);
}
greetUser(name, surname);
greetUser('Pawel', 'Kowalski');

// -------
function greetUser2(name1, surname1) {
    const text = 'Hello, ' + name1 + ' ' + surname1;

    console.log(text);
    //alert(text);
}
greetUser2('Jan', 'Kot');


// ---------
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

let wallet = 100;
wallet = sum(wallet, 25);
console.log(wallet);
console.log('Current value of wallet is: ')


wallet = sum(wallet, 15);
console.log(wallet);

function decTax(grosary) {
    const tax = 0.6;
    return grosary - grosary * tax;
}

let wallet1 = 0;
const grosaryNet = decTax(1000);
wallet1 = sum(wallet1, grosaryNet);
console.log(wallet1);

// ----
function decTax2(grosary) {
    const tax = 0.6;

    if (grosary <= 0) {
        return grosary;
    } //else {
      //  return grosary - grosary * tax;
 //   }
    // nie potrzebuje else bo zamiast tego będzie return
    console.log('Po if ie')
    return grosary - grosary * tax;
}

console.log(decTax2(-50));
console.log(decTax2(200));


// --- sam return;
function  decTax3(gross) {
    const tax = 0.6;

    if (gross <= 0) {
        console.log("Gross must be positive number");
        return;  // sam return
    }
    console.log('return po if ie');
    return gross - gross * tax;
}

console.log(decTax3(-50));
console.log(decTax3(100));

// --- czy przekazana wartość jest liczbą
function decTax4(gross) {
    const tax = 0.6;

    if (typeof gross !== 'number') {
        console.log('Gross must be number!');
        return;
    }
    if (gross <= 0) {
        console.log('Gross must be positive number');
        return;
    }
    console.log('return po if ie');
    return gross - gross * tax;
}

console.log(decTax4('Dwe stowki'));
console.log(decTax4(-50));
console.log(decTax4(100));


// --- przypisanie funkcji do zmiennej
const sum2 = function (a, b) {
    return a + b;
};

// ---

const showMessage = function () {
    console.log('This is an anonymous function because it is without name');
}

// ---------- funkcja strzałkowa tzw. funkcja anonimowa bo nie ma nazwy (brak function nazwaFunkcji);
// funkcje strzałkową przypisujemy do zmiennej

const sum4 = (a, b) => {
    return a + b;
};

console.log(sum4(2, 4));

// ------------- można krócej
const sum5 = (a, b) => a + b;

// --------  gdy jeden parametr to może być bez nawiasów. Tu jest do potęgi 2
const pow = num => num ** 2;

// --------------
const test = () => console.log('Test');

// day 1 - Additonal - String 2
console.log('---day 1 - Additonal - String 2 - Own function and method');
// own function and method
// Return every second letter (1 odd, 2 even)

function onlyEvenLetter(oldString) {
    let newString = ''; // new empty String
    for (let i = 1; i < oldString.length; i = i + 2) {
        // console.log(oldString[i]);
        newString += oldString[i];
        // newString = newString + oldString[i];
    }
    return newString;
}

console.log(onlyEvenLetter('abcdfefg'));

// --- Tworzymy nową właśną metode dla Stringa.
console.log('---');

String.prototype.onlyOddLetters = function () {
    const oldString = this.valueOf();
    let newString = '';
    for (let i = 0; i < oldString.length; i = i + 2) {
        newString += oldString[i];
    }
    return newString;
}

const letters = 'abcdefgh';

// wywołujemy naszą nową metode na stringu
console.log(letters.onlyOddLetters());

console.log('\n--- Day 1 - Additonal - Funcje')
// Day 1 - Additional - Funcje
// wywołanie funkcji może być powyżej deklaracji funkcji a i tak zadziała

showMyMessage();

function showMyMessage() {
    console.log('Wywołanie powyżej deklaracji a i tak zadziała');
}

// Ale jeżeli do zmiennej przypiszemy funkcjię to jej nie możemy wywołać powyżej
// bo to jest zmienna a zatem najpierw musi być zadeklarowana a potem (poniżej) wywołana

// nie możemy wywołać przed deklaracja. Musi być poniżej deklaracji
// showMyMessage2();

const showMyMessage2 = function () {
    console.log('Przypisanie funkcji anonimowej do zmiennej');
}

// tak jest ok bo jest poniżej;
showMyMessage2();

// 3 Konstruktor - Function Constructor

// const nazwaFuncjiCoRobi = new Function();

const textAlert = new Function('tekst', console.log('tekst'));

textAlert();

// invoking - wywoływanie funkcji

console.log('\n--- invoiking - wywoływanie funkcji');

const divideBy2 = function (number) {
    console.log(number / 2);
}

divideBy2(20);

const result1 = divideBy2(12);
result1;

// ---
const divideBy3 = function (number) {
    return number / 3;
}

const result2 = divideBy3(9);
result2;

console.log(result2);


// Fat arrow

const addTwoNumbers = (x,y) => {
    const result = x + y;
    console.log(result);
    return result;
}
 
const addTwoNumbers2 = (x, y =0) => {
  const result = x + y;
    console.log(result);
    return result;
}

// możemy dla obu parametrów ustawić wartości domyślne
// zawsze pierwszy argument bedzie przypisany do x;

addTwoNumbers(2);

const addTwoNumbers3 = (x = 0, y =0) => {
    const result = x + y;
    console.log(result);
    return result;
}

// function vs fat arrow
// function
const addTwoNumbers6 = function (x, y) {
    const result = x + y;
    console.log(result);
    return result;
}
// fat arrow
const addTwoNumbers5 = (x,y) => {
    const result = x + y;
    console.log(result);
    return result;
}

// Bez wartości domyślnych gdybyśmy nie podali argumentów to otrzymalibyśmy
// undefined w miejscu ich wykorzystania


