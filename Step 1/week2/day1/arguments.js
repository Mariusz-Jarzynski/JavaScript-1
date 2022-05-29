// Arguments
console.log('--- Arguments ---');

// arguments - obiekt arguments (podobny do tablicy ale to nie jest tablica)
// który zawiera aktualna listę argumentów przekazanych do tablicy

const showArguments = function () {
    console.log(arguments); // nzawa dla obiekty. Nazwa przypisana
    console.log(arguments.length); // długość - ile argumentów przekazaliśmy
    console.log(arguments[0]); // odwołanie do konkretnego agrumentu
    console.log(typeof arguments); // obiekt tablicopodobny. Ma właściwość length, można odwołać się za pomocą
    // notacji tablicowaj np. arguments[2]. Nie ma metod znanych z tablic
    console.log(Array.isArray(arguments)); // false - to nie jest tablica
}

showArguments();
console.log('---');
showArguments('25', null, {});

console.log('--- wykorzystanie w praktyce ---');
// wykorzystanie w praktyce

const addAllNumbers = function () {
    let result = 0;
    for (let i =0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const usersMoney = addAllNumbers(3, 2, 200, 1, 3);
console.log(usersMoney);

console.log('---');
// Jak sprawdzić by funkcja zachowywała się inaczej przy różnych argumentach

function showInfoAboutUsers(age, name, sex) {
    if (arguments.length === 0) {
        console.log('There is no information!');
    } else if (arguments.length === 1) {
        console.log('Users is ' + age + ' years old and no more information is provided');
    } else if (arguments.length === 2) {
        console.log(`User is ${age} years old, name is ${name}`);
    } else {
        console.log(`User is ${age} years old, name is ${name} and is ${sex}`);
    }
}

showInfoAboutUsers();
console.log('--');
showInfoAboutUsers(25);
console.log('--');
showInfoAboutUsers(20, 'Asia');
showInfoAboutUsers(34, 'Anna', 'Male');
// if we provide more arguments there will be no shown
showInfoAboutUsers(45, 'Paula', 'Female', 'Kowal');