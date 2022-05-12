// Day 5 – if, obiekt String, ćwiczenia
console.log('Day 5 - if, String, exercises  \n');

// if

const weather = 'rainy';

if(weather === 'rainy') {
    console.log('Take an umbrella');
} else {
    console.log('It is a good weather')
}

// or
console.log('-- or --');

if (weather === "rainy" || weather === 'windy') {
    console.log('Take an umbrella');
}

// prompt - za działa w Chrome. prompt czyli pobierze odp od użytkownika
/*
const weather3 = prompt('What weather is today? Say: sunny/rainy/windy');
if (weather3 === 'rainy' || weather3 === 'windy') {
    console.log('Stay at home');
    alert('Stay at home!')
} else {
    console.log('Mozesz wyjść na dwór')
    alert('Mozesz wyjść na dwór');
}
*/

// else  if
console.log('-- else if --');

if (weather === 'rainy') {
    console.log('Stay at home');
} else if (weather === 'windy') {
    console.log("Watch out for trees!");
} else {
    console.log('You can go out');
}




