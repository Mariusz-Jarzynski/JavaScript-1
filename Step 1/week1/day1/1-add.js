// typeof - operator, który zwraca informacje o typie
console.log(3 + 3);

// gdy drugą liczba wpiszemy jako String to wynik zosanie zamieniony na String
console.log(3 + "3");

typeof "tekst";

console.log(typeof 'tekst');
console.log(typeof 22);
console.log(typeof 22.56);

console.log("Cyfra + String");
console.log(typeof 3 + '3');

console.log("Cyfra + String");
console.log(typeof (3 + '3'));

// typ referencyjny - Obiekty
console.log('Typ referencyjny - Obiekty')
typeof {};
typeof [];
typeof function () {};

console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

console.log(2 + 3.14);
// wynik 5.14000000000000000001
// Jak to zapusuje prcesor binarny


//----------------
//typeof
console.log('\n --- typeof ----- \n');

typeof 'Hello world';
console.log(typeof 'Hello world');

console.log(typeof 23);

console.log(typeof 23.45);

// rzutowanie czyli zamiana jednego typu danych na inny np Stringa na Number
// Converting one type of data into another
Number('24');
console.log(Number('24'));

// to jest String
console.log('To jest 24 jako String');
console.log('24');

// tablica jakigeo jest typu? Object
console.log(typeof [1,2,3]);