console.log("Loop - Pętla")
// Loop - Pętla

// while
let i = 0, a = 0;

while (i < 10) {
    console.log(i);
    i++;
}

console.log('-------------------')

while (a < 10) {
    console.log(a++);
}

console.log(' --- ');

let z = 0;
while (z < 5) {
    console.log(++z);
}

console.log('--------- Array');

const myArrayWhile = ['Mega', 'Kurs', 'JS'];

let b = 0, c =0;
while (b < myArrayWhile.length) {
    console.log(b++);
}

// we can not use one variable in two loop, therefore we had to created second variable c to use it below
while (c < myArrayWhile.length) {
    console.log(myArrayWhile[c]);
    c++;
}

// -------------
let petrol = 5;
let km = 0;

while (--petrol) {
    km +=7;
    console.log('Przejechaliśmy ' + km + ' km. Zostało nam ' + petrol + ' l paliwa');
    // można zapisać z grawisem
    console.log(`Przejechaliśmy ${km} km i zostało nam ${petrol} l paliwa`);
}
console.log('Paliow się skończyło! ');

// or
let petrol2 = 5;
let km2 = 0;

while (petrol2 > 0) {
    console.log(`Przejechaliśmy już ${km2} km i pozostało nam ${petrol2} l paliwa`);
    km2 +=7;
    petrol2--;
}

// do while -------------
console.log('--- do while ----')


let d = 0;
do {
    console.log(myArrayWhile[d])
    d++;
} while (d < myArrayWhile.length);

// wykona się przynajmniej raz
console.log(' -- execute only 1 time --');

let g = 10;

do {
    console.log(g);
    g++;
} while (g < 8);
