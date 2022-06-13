// Array - Tablica
console.log("Array - Tablica");

const myArray = [1, 2, 3];
console.log(myArray);

// Displaying the length of the array
myArray.length;
console.log(myArray.length);

// Displaying indicated index from Array. Indexes in Array starts from 0
myArray[0];
console.log('Indeks nr 0 wynosi ' + myArray[0]);

// Change value of indicated index in Array, so we modify Array / modyfikujemy Tablice
myArray[0] = 2;
console.log(myArray);

// The last array's index is smaller by 1 from Array length / Ostatni nr indeksu jest o 1 mniejszy od długości Tablicy
myArray[myArray.length - 1]

myArray[myArray.length - 1 + 1] = 6;  // also  myArray[myArray.lengh] = 6;
console.log(myArray);

// Dodajemy kolejny indeks do Tablicy, którego wcześniej nie było
// Add next index to the end of Array, which has not exist before.
myArray[myArray.length - 1 + 1] = 7;
// or
myArray[myArray.length] = 8;
console.log(myArray);

console.log('\n');
// Ctrl + Q or najechanie kursorem na metodde

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log('The push() method');
console.log(myArray + ' length of the array is ' + myArray.length);
myArray.push('Nowa osoba');

console.log(myArray);
console.log(myArray.length);

// The pop() method removes the last element from an array and returns that element. This method changes the length
// of the array. Returned is an Array
console.log('The pop() method removes the last element from an array and returns that element');
console.log(myArray);
console.log(myArray.length);
let arrayIndex = myArray.pop();

console.log('\n');

// The splice() method.
console.log('The splice() method');
const array2 = [1, 2,3, 4, 5, 6, 7, 8, 9, 10];
console.log(array2);
// 1. Removing existing element from given index no to the end, and we can use it as a variable, new array
let deletedIndexs = array2.splice(7);
console.log(deletedIndexs);
console.log(array2);

console.log('\nSecond - removing last element');
// 2. Cut last index
console.log(array2);
// Cut item is an Array and we can use it
let deletedLastElement = array2.splice(array2.length -1);
console.log(deletedLastElement);
console.log(array2);

console.log('\nThird example');
// 3. Removing existing element from given index no by given number. How many will be cut.
let cutIndexs = array2.splice(1, 3);
console.log(cutIndexs);
console.log(array2);

console.log('\nFourth example');
//4. Removing element from given index by given number elements and adds new provided elements
// which will be put from indicated index ex. cut from index 1 so new will be put in 1 even there will be more elements
array2.splice(1, 3, 15, 20, 25, 30);
console.log(array2);


// Delete
console.log('\nDelete - removes values but index remain and it is empty');
const array5 = [1, 2, 3, 4];
console.log(array5);
console.log(array5.length);
delete array5[1];
console.log(array5);
console.log(array5.length);


console.log('\nStretch array to 20 indexes');
// Stretch (rozszeżać, powiększać) array to 20 index. Indexes has been created but are empty
const array3 = [1, 2, 3, 4];
console.log(array3);
array3.length = 20;
console.log(array3);
console.log('Index no 10 has value: ' + array3[10]);

// The sort()
console.log('\n The sort() method');
const charsArray = ['c', 'w', 'a'];
console.log('Array before sort \n' + charsArray);
charsArray.sort();
console.log('Array after sort \n' + charsArray);

const charsArrayBig = ['C', 'W', 'A'];
console.log('Array before sort \n' + charsArrayBig);
charsArrayBig.sort();
console.log('Array after sort \n' + charsArrayBig);

// if there are Capital and small letters sort does not work. Firs sort Capital Letters and then sort small
const charsArrayMixed = ['C', 'A', 'z', 'B', 'a', 'R'];
console.log('Array before sort \n' + charsArrayMixed);
charsArrayMixed.sort();
console.log('Array after sort \n' + charsArrayMixed);