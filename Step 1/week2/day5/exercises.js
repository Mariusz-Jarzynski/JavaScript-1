// 2

/**
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.
 */

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

/**
 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje)
     osiągnie następujący efekt:
 a. Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków.
 b .Nazwy miast powinny być pisane wielkimi literami np WROCŁAW
*/


const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra',
                'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

// 1
let sumGrades = 0;
grades.forEach(grade => sumGrades+= grade);

const avg = sumGrades / grades.length;

console.log('Avrage is ' + avg);

// 2
const goodGrades = grades.filter(grade => grade > 4);
console.log(goodGrades);
// or
grades.forEach(grade => {
    if (grade > 4) {
        console.log(grade);
    }
});
// or from MegaK
grades
    .filter(grade => grade > 4)
    .forEach(grade => console.log(grade));


// 3
console.log('--- 3  --- ');
console.log(cities[0].length);

// ta zmienna city to w każdym może być inna. np w filter jest city, w map może byc myCity itp
// !(city.length % 2) to to samo co city.length % 2 === 0
cities
 //   .filter(city => !(city.length % 2))
    .filter(city => city.length % 2 === 0)
    .map(city => city.toUpperCase())
    .forEach(city => console.log(city));
   // .forEach(city => console.log(city.length));

// or po wyciąganie zmiennych
const onlyEvenNameLength = city => !(city.length % 2);
const toUpperCaseCities = city => city.toUpperCase();
const showCities = city => console.log(city);

cities
    .filter(onlyEvenNameLength)
    .map(toUpperCaseCities)
    .forEach(showCities);
