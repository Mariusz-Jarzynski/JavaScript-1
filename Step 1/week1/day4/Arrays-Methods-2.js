// Array methods
console.log('Array methods');

const array1 = [1, 2, 3, 4, 5];
console.log(array1);


// The push() method
console.log('The push() method');

array1.push(6, 7);
console.log(array1);

// The unshift() method
console.log('The unshift() method');

array1.unshift('Janek');
console.log(array1);

// The pop() method
console.log('The pop() method');

let arrayItem = array1.pop();
console.log(arrayItem);
console.log(array1);

// The shift() method
console.log('The shift() method');

let removedIndex = array1.shift();
console.log(removedIndex);
console.log(array1);

// The concat() method
console.log('The concat() method');

const cars1 = ['Opel', 'Ford', 'WV'];
const cars2 = ['Astra', 'Focus', 'Golf'];

console.log(cars1);
console.log(cars2);

const nameAndModel = cars1.concat(cars2);
console.log(nameAndModel);

// Spread syntax(...)
console.log('3 kropki - Spread');
const spreadArray = [...cars1, ...cars2];
console.log(spreadArray);

const spreadArray2 = [...cars1, ...cars1, 'Audi'];
console.log(spreadArray2);

// The splice() method
// delete
// Array.isArray()
// The sort() method - does not work if there is a small letter and at the same time a capital letter
// First Capital letters are sort then small





