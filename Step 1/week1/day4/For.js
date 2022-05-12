// Loop - Pętla
// For
console.log('Loop for');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('--- Arrays --');

const myArray = ['Mega', 'Kurs', 'JS'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let i = 0; i < myArray.length; i++) {
    myArray[i] = 'WOW ' + myArray[i];
}
console.log(myArray);

// Create a new Array
const array1 = new Array(15, 25, 31, 47, 58);
console.log(array1);

const array2 = [];

for (let i = 0; i < array1.length; i++) {
    array2[i] = 'User age: ' + array1[i];
}

console.log(array2);