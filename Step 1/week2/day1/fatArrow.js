// 1
// Day 1 (6) - Fat arrow - funkcja strzałkowa

function myFunction(x, y) {
    return x + y;
}

const mySum2 = function (a, b) {
    return a + b;
}
// fat arrow - funkcja strzałkowa tzw. funkcja anonimowa bo nie ma nazwy (brak function nazwaFunkcji);
//// funkcje strzałkową przypisujemy do zmiennej
const mySum3 = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
}
// -- można krócej
const mySum4 = (a, b) => a + b;
// --------  gdy jeden parametr to może być bez nawiasów. Tu jest do potęgi 2
const pow = num => num ** 2;
const message = txt => 'This is message ' + txt;

const test = () => console.log('This is test');

console.log(myFunction(4, 8))
console.log(mySum2(3, 7));
mySum3(2, 6);
console.log(mySum4(5, 4));
console.log(pow(3));
console.log(message('Hello'));
test();

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