//1
// Week 2 – Day 5 (10 z 25) – Zaawansowane metody tablicowe i elementy programowania funkcyjnego

// forEach

const ar = [1, 2, 3];

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}

ar.forEach((element, i) => {
    console.log(i);
    console.log(element);
});

ar.forEach(num => console.log(num));

console.log('---');

// zwiększamy każdy element tablicy o 2
ar.forEach(num => num + 2);
console.log(ar); // wynik jest nadal starej tablicy bo powyżej tylko wyświetliliśmy plus 2 ale nie zmieniliśmy tablicy
// aby zmienić tablice musimy uzyć również index

// forEach moze posiadać 3 parametry: element, index, orginalna tablica
ar.forEach((num, i, array) => { // trzeci element bardzo rzadko używany
    array[i] = num + 2;
});

console.log(ar); // teraż już jest zmieniona tablica


// ---
const names = ['Jan', 'Paul', 'Mike'];

names.forEach((name, index) => {
    console.log(index + ' ' + name);
});


// map ---------------------------------------
// programowanie funkcyjne to nie zmienianie orginału

// map -  tworzymy nowa tablice, a stara, oryginalna zostaje nie zmieniona


const numbers = [1, 2, 3];

// map może posiadać w argumentach 3 parametry: element, index, orginalna tablica
numbers.map((element, index, array ) => {

});

//----

const newNumbers = numbers.map((number) => {
    return number + 2;
});

// krócej
const newNumbers2 = numbers.map(num => num + 2);

console.log(newNumbers);
console.log(newNumbers2);


// --------------------------------
// filter

const items = [1, 2, 34, 5, 66];

// filter może posiadać w argumentach 3 parametry: element, index, orginalna tablica
items.filter((element, index, array) => {
        return true;
     // filter zwraca true lub false
    // filter bierze każdy element tablicy i jak true to zostawia jak był, jak false to zmienie na nowy
    // jeżeli true to zostawia stary, jeżeli false to zmienia na nowy
})

//---------
// przykład z if i modulo
const newItems = items.filter((number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false;
    }
});

// wynik, nowa tablica. Jeżeli dany element jest podzielny przez 2 to zostaje na swoim miejscu,
// a jak nie to nie ma nic
console.log(newItems);

// --------
// krócej

const newItems2 = items.filter((number) => {
    return number % 2 === 0;
});

// jeszcze krócej, sposób funkcyjny
const newItems3 = items.filter(number => number % 2 === 0);

//---------
const newItemsMultipliedBy2 = newItems3.map(numbers => numbers * 2);
console.log(newItemsMultipliedBy2);

// 1. filter -  kiedy przefiltrujesz nam te liczby
// 2. map - to z nową tablicą (bo tam jest nowa tablica) zrób kolejną rzecz
// 3. Dopiero wynik tego całego działania przypisz do jednej wspólnej zmiennej

const newItemsMultipliedBy22 = items
    .filter(number => !(number % 2))
    .map(number => number *2);

//--------
const onlyEven = number => !(number % 2);
const multipliedBy2 = number => number * 2;
const show = number => console.log(number);

items
    .filter(onlyEven)
    .map(multipliedBy2)
    .forEach(show) // forEach nie zwraca tablicy a zatem nie może tego wszystkiego przypisać do jednej zmiennej
// ale forEach możemy wyświetlić pojedyńcze elementy




















