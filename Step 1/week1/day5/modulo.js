// Day 5
// Modulo - reszta z dzielenia    10 % 6 resza z dzielenia 10 przez 6 to 4

let count = 10;
for (let i = 0; i < count; i++) {
    if ((i % 2) === 0) {
        console.log(i + ' liczba parzysta');
    }
}

for (let i = 0; i < count; i++) {
    if ((i % 2) !== 0) {
        console.log(i + ' liczba nie parzysta');
    }
}

// we can create two const variable in one line
// można utworzyć dwa consty w jednej lini pisząc tylko jeden raz const
// lepiej każdą zmianną w nowej lini
console.log('\ndzielimy przez 3 \n');

const start = 1, coutn = 100;

for (let d = start; d <= coutn; d++) {
    if (d % 3 === 0) {
        console.log(d + ' Liczba podzielna przez 3');
    }
}