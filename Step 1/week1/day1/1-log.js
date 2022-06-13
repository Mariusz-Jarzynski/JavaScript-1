// 1
// about:blank - about dwukropek blank - w Chrome, w pasku adresu wpisujemy aby pojawiła się czysta, pusta strona
// Chorme F12 i wyskakuje wersja deweloperska

// wyskakujące okienko w przeglądarce z wiadomością. W WebStorm może nie działać. W Chrome działa
// window.alert('Hej to ja');
// alert('Hej sokoly');

// TODO Tak dodajemy info co mamy do zrobienia

console.log('Hellow world');
// Alt + F12 i przechodzimy do terminala. Wpisujemy node i zaczynamy pisać nazwe pliku i wciskamy Tab

// Aby uruchomić plik z terminala musimy być w tym katalogu co jest plik.
// cd i wczytujemy dany katalog
// cd.. - dwie kropki - wychodzimy z danego katalogu

// log + tab lub Enter  = console.log()
console.log('Jak masz na imie?');

// ('Hello world').log + Enter i całe wyrażenie umieszcza w consol.log - Ale jest w 2 nawiasach
console.log(('Hello world .log + Enter i całe wyrażenie umieszcza w consol.log'));

// 'Hello world'.log + Enter i całe wyrażenie umieszcza w consol.log - bez nawiasu String
console.log('Hello world');

// kropka jest jako przecinek, gdy piszemy ułamek liczby

// W gogle Chrome wystarczy wpisać samo Math.round(3.14) i wyświetli wynik.
Math.round(3.14);
console.log('W chrome wynik powyższej metody byłby wyświetlnoy, w WebStorm nie');

// W WebStorm trzeba to ująć w consle.log aby wypisać rezultat, wydrukować, wypisać w konsoli, termianlu
console.log(Math.round(3.14));

// Ctr + D - duplikuje linie tekstu
console.log(Math.floor(3.14));
console.log(Math.ceil(3.14));

// gdy wpiszemy przecinek to potraktuje to jak wpisanie dwóch osobnych cyfr i wyświetli pierwszą cyfre
console.log(Math.ceil(3,14));

// Day 2
// słabo typowany
// true
0 == '0';

// false
0 === '0';

console.log('true');
console.log(0 == '0');

console.log('false');
console.log(0 === '0');

// Zaleca się pisanie 3 znaki równa się = do porównania jednego z drugim

// 5 nie równa się 10
10 != 5;

// || - lub
// && - and i
10 >= 3 && 10 <=99;
10 >= 3 || 10 <=99;