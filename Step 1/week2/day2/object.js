// 1
// Week 2 – Day 2 (7 z 25) – Obiektowość

const a = 5; // global variable - zmienan globalna dostępna również w bloku kodu

// blok kodu oddzielony nawiasami klamrowymi { }
{
    const b = 2; // local variable - zmienna lokalna,  jest dostępna tylko w tym bloku. Poza nim nie istnieje
    console.log(a);
    console.log(b);
}

console.log(a);
// console.log(b); // Reference Erro: b is not defined - b nie istnieje. b is a local variable

// ---
const obj = {};
console.log(obj);
console.log(typeof obj);
console.log(typeof {});

// --- object
const obj1 = {
    name: 'Janek',
    surname: 'Nowak',
    sayHello() {
        console.log('Hello World!'); // tu średnik stawiamy
    }, // stawiamy przecinek
}; // na końcu obiektu stawiamy średnik

console.log(obj1);

const obj2 = {
    name: 'Pawel',
    surname: 'Kowalski',
    'Identyfikator Użytkownika': '80', // Jeżli nazwa jest ze spacją to zapisujemy jako String
    sayHey: () => {   // funkcje w obiekcie nazywamy metodą
        console.log('Hey World');
    },
};

console.log(obj2);

obj2.sayHey();
obj2.name;
obj2.surname;

console.log(obj2.name);

obj2.surname = 'Boczek';
console.log(obj2);

obj2.age = 40;
console.log(obj2);

// name to String a więc możemy użyć metod Stringa. Tu tylko wyświetlamy. Nie zmieniamy
console.log(obj2.name.toUpperCase());

// tak możemy zmienić = przypisać nową wartość do zmiennej
obj2.name = obj2.name.toUpperCase();

console.log(obj2);

console.log(obj2['Identyfikator Użytkownika']); // odwoływanie się do nazw ze spacją
console.log(obj2['name']); // tak też można

// ---
const myMath = {
    pow: (a, b) => a ** b,
};

console.log(myMath.pow(3, 3));
// ---
const myMath2 = {
    pow2(a, b) {
       return a ** b;
    },
};

console.log(myMath2.pow2(2, 3));

// ---
console.log('---');

const person1 = {
    name: 'Marian',
    surname: 'Pazdzioch',
    sayPerson1() {
        console.log(this);
    },
};

person1.sayPerson1();
// ---

const person2 = {
    name: 'Tester',
    surname: '1',
    sayMe() {
        console.log('Pozdrowienia od ' + this.name);
    },
};

const person3 = {
    name: 'Testerka',
    surname: '2',
    sayMe: person2.sayMe,
};

person2.sayMe();
person3.sayMe();

console.log('\n--- Konstruktory to zwykłe funkcje. Nazwy konstruktorów piszemy z wielkiej litery ---');
// --- Konstruktory to zwykłe funkcje. Nazwy konstruktorów piszemy z wielkiej litery
function Person(newName, newSurname) {
    this.name = newName;
    this.surname = newSurname;
    this.sayHello = function () {
        console.log('Hello from ' + this.name + ' ' + this.surname);
    };
}

new Person('Anka', 'Nowa');

console.log(this.name);
console.log(this);

console.log(new Person('Jan', 'Nowak'));

console.log('---');
// przypisywanie obiektów do zmiennej
const objectPerson1 = new Person('Ewelina', 'Mala');
const objectPerson2 = new Person('Maniek', 'Sokoly');
console.log(objectPerson1, objectPerson2);

console.log('---');
const schollClass = [];
for (let i = 0; i <= 10; i++) {
    // w pętli możemy użyć const bo ta zmienna tworzona jest na chwilę i znika. Przy drugim i będzie już nowa const
    const person = new Person('Osoba', i);
    schollClass.push(person);
}

console.log(schollClass);