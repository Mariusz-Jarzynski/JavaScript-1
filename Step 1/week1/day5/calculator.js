// Stwórz prosty kalkulator
// Zapytaj użytkownika o pierwszą liczbę, drugą i znak - osobno trzema prompt
// Następnie za pomocą if i operacji wykonaj a+b, a-b, a*b, a/b
// Wyświetl wynik działania w koncoli

// prompt - kod działa w Chrome lub replit, codepen
// Uwaga to co odberamy promptem to jest String

/*
const aString = prompt("Podaj pierwszą liczbe: ");
const bString = prompt("Podaj drugą liczbe: ");
const mark = prompt("Podaj znak: ");

const a = Number(aString);
const b = Number(bString);
*/
// lepiej w jednej linijce i użyć jednej zmiennej

const a = Number(prompt("Podaj pierwszą liczbe: "));
const b = Number(prompt("Podaj drugą liczbe: "));
const mark = prompt("Podaj znak: ");

if (mark === '+') {
    console.log(a + b);
} else if (mark === '-') {
    console.log(a - b);
} else if (mark === '*') {
    console.log(a * b);
} else if (mark === '/') {
    if (b === 0) {
        console.log('Nie dzieli się przez 0!');
    } else {
        console.log(a / b);
    }
} else {
    console.log('Wpisałeś zły znak!!');
}
