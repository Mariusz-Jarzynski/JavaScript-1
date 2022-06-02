// 4
// CALLBACK

// Funkcja wywołania zwrotnego, czyli funkcja przekazania jako agrument do funkcji i wywołana w niej
// Funkcja, do której przekazujemy inną funkcje (czyli nasz callback) nazywa się tunkcją wyższsgo rzędu

// 1. Przykład callback

function count(x, callback) {
    return callback(x);
}

function addOne(number) {
    number++;
    console.log(number);
    return number;
}

addOne(3);

function subtractOne(item) {
    item--;
    console.log(item);
    return item;
}

subtractOne(6);

// callback
console.log('\ncallback');

const result = count(10, addOne);

// 2. Przykład callback
window.addEventListener('click', function() {
    console.log('click');
})


function showClick() {
    console.log('click');
}

document.body.addEventListener('click',showClick);

// 3. Przyklad callback

// po upływie 2 sekund zrób to: czyli wydrukuj tekst, i tak dalej.
// Ctr + C - stop działanie
setInterval(() => console.log('2 second gone'), 2000);

// or

const showTime = () => {
    console.log('2 second gone');
}

setInterval(showTime, 4000);

// jako callback możemy podać funkcję anonimową lub funkcję nazwaną

// 4. Przykład callback
const userAge = [20, 15, 55, 35, 95, 45, 18];

userAge.forEach(userAge => console.log(`user age is: ${userAge}`))

//
userAge.forEach(function (userAge) {
    console.log('2 - User age is ' + userAge);
})

// forEach - wykonaj na każdym elemencie tablicy. Bierze najpier jeden element i wykonuje
// potem drugi element i wykonuje, itp




