//Dzień 4 – Dodatkowy z Harmonogramu – Pętle 2 - Loops
console.log('Day 4 - Additional - Loops');

// Pętla w pętli - Loop in Loop
for (let i = 0; i < 3; i++ ) {
    for (let j = 0; j < 5; j++) {
        console.log(i,j)
    }
}
// ----
console.log('---');

let a = 1;
for (let i =0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
        // ` uzywamy grawisu zamiast apostrof lub cudzysłowie co daje nam
        console.log(a + ` Zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} da wynik ${i * j}`);
        a++;
    }
}

// Loop on Array,
// Example 1 - Displaying users age
console.log('\n Displaying users age \n')

const usersAge = [19, 15, 17, 45, 34, 33, 25];

for (let i = 0; i < usersAge.length; i++) {
    console.log(`Wiek użytkownika numer ${i} to ${usersAge[i]}`)
    // można też tak jak poniżej - jeżeli chcemy dodać 1 do i to musi to być w nawiasach
    console.log('Wiek użytkownika numer ' + i + ' to ' + usersAge[i]);
}

// Example 2 - Calculate users age
console.log('\n Calculate users age \n')

const usersDateBirth = [2000, 1982, 1991, 1984];
const currentYear = 2021;

for (let i = 0; i < usersDateBirth.length; i++) {
    // możemy tworzyć zmienną za pomocy const bo za każdym razem gdy wykona się pętla to to znika
    // i tak od nowa nowe powtórzenie w pętli. Ta zmienna znika
    const userAge = currentYear - usersDateBirth[i];
    console.log(`Wiek użytkownika numer ${i} to ${userAge}`);
}
// -----
console.log('-----');

const yearOfBirth = [2000, 1982, 2004, 1984];
const currentYear1 = 2021;

for (let i = 0; i < yearOfBirth.length; i++) {
    const age = currentYear1 - yearOfBirth[i];
    console.log(`User no ${i + 1} is ${age}`);
}

// Example 3 - Alert - Welcoming guests
console.log('\n Welcoming quests \n');

const guest = ['piłkarz', 'kucharz', 'murarz', 'programista', 'polityk', 'pisarz', 'magazynier', 'emeryt'];

for (let i = 0; i < guest.length; i++) {
    if (guest[i] === 'programista') {
        console.log(i + ' ' + guest[i] + ' - Sorry, nie ma miejsc');
    } else if (guest[i] === 'polityk') {
        console.log(i + ' ' + guest[i] + ' - Ale mi przykro. Brak miejsc');
    } else {
        console.log(i + ' Witamy Panie ' + guest[i] + ' Zapraszamy!');
    }
}

// For - of
console.log('\n For - of \n');

const colors = ['red', 'green', 'black', 'yellow', 'white'];

// Tworzymy dowolną zmienną np const color
for (const myColour of colors) {
    console.log('Moj kolor ' + myColour);
}















