// Day 4 - Additional - Arrays 2 - Tablice 2
console.log('Array - Methods  ||  Tablica - Metody \n');

// Arrays method:
// add - push(), unshift(),
// remove - pop(), shift(), splice(), delete, array cleaning,
// connect - concat(), Spread syntax(...),
// sort(), Array.isArray(),

const gameUsers = ['Paul', 'Michael', 'Adam', 'Evelina'];
console.log('Array length ' + gameUsers.length + ' - ' + gameUsers);
console.log(gameUsers);

// PUSH - add item at the end of the array
gameUsers.push('Kris');
console.log(gameUsers);

// UNSHIFT - add item at the beginning of the array
gameUsers.unshift('Victoria');
console.log(gameUsers);

// POP - removes last item from the array
// gameUsers.pop();
// removed last element can be declared to a new variable
let removedLastElement = gameUsers.pop();
console.log(gameUsers);

// SHIFT - removes the first element from the array (remove value and index)
// gameUsers.shift();
let removedFirstElement = gameUsers.shift();
console.log(gameUsers);

// DELETE - remove only value but index remain

// Co zwracają te metody oprócz tego, że usuną dany element z Tablicy.
// np nową tablicy z tym usuniętym elementem i możemy ale nie musimy przypisać do zmiennej

// CTR + Q lub kliknij myszką na daną metode i wyświetli się opis, co zwraca itp
console.log('\n CTR + Q lub kliknij myszką na daną metode i wyświetli się opis, co zwraca itp \n');

// Metoda CONCAT - łączenie tablic. Z dwuch lub więcej tablic tworzona jest całkiem nowa tablica
console.log(' --- Concat ---');

const cars = ['opel', 'ford', 'mazda'];
const vans = ['vivaro', 'transit', 'crafter'];
console.log(cars);
console.log(vans);

const carsAndVans = cars.concat(vans);
console.log(carsAndVans);

const myCars = cars.concat(vans, ['Audi']);
console.log(myCars);

// Spread syntax(...)
// Inny nowy sposób (od ES6) na łączenie tablic to Operator Spred (operator rozwijania, operator 3 kropek)
console.log(' \n--- Operator spred --- ');
const spreadArray = [...cars, ...vans];
console.log(spreadArray);
const spreadArray2 = [...cars, ...vans, 'Audi'];
console.log(spreadArray2);

// SPLICE - removing items
spreadArray2.splice();



