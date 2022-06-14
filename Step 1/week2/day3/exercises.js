// 2


// Rest operator vs Arguments

// Rest opertor

function sumNumbers(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sumNumbers(2, 4, 6, 8));

// Arguments

function sumNumbers2() {
    let result2 = 0;
    for (let i = 0; i < arguments.length; i++) {
        result2 += arguments[i];
    }
    return result2
}

console.log(sumNumbers2(2, 4, 5, 4));

// Zadanie 1
// Jest obiekt. Funkcja filter ma przyjąć pełen obiekt, ale zwrócić bezpieczny - z samym id, name, hasAvatar
// Zastanów się nad urzyciem destrukturyzacji w jednej linijce, a w drugiej wykorzytaj taką samą nazwę klucza i zmiennej
console.log('---Exercise no 1 ---');

const obj1 = {
    id: 1,
    name: 'Tester Testowy',
    pwdHash: 'abc123',
    isAdmin: true,
    hasAvatar: true,
};

// 1 rozwiązanie
function filter(obj) {
    const obj2 = {
        id: obj.id,
        name: obj.name,
        hasAvatar: obj.hasAvatar,
    }
    return obj2;
}

console.log(filter(obj1));

// 2 rozwiązanie
console.log('---');

function filter2(obj) {
    const {id, name, hasAvatar} = obj;
    const obj3 = {id, name, hasAvatar};
    return obj3;
}

console.log(filter2(obj1));

// 3 rozwiązanie od MegaK
console.log('---');

function filter3(obj) {
    const {
        id, name, hasAvatar
    } = obj;
    return {
        id, name, hasAvatar,
    };
}

console.log(filter3(obj1));

// Zadanie 2
console.log('---');

const user = 'Jan Kowal';
const age = 40;
const role = 'Admin';

const info = `${user} has a role of ${role} and is born in year ${new Date().getFullYear() - age}`;
const yearOfBirth = `${new Date().getFullYear() - age};`

console.log(info);
console.log(yearOfBirth);
















