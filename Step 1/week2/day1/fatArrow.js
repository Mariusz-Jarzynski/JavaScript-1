// 1
// Day 1 (6) - Fat arrow - funkcja strzałkowa

function myFunction(x, y) {
    return x + y;
}

const mySum2 = function (a, b) {
    return a + b;
}

const mySum3 = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
}

const mySum4 = (a, b) => a + b;

const message = txt => 'This is message ' + txt;

const test = () => console.log('This is test');

console.log(myFunction(4, 8))
console.log(mySum2(3, 7));
mySum3(2, 6);
console.log(mySum4(5, 4));
console.log(message('Hello'));
test();