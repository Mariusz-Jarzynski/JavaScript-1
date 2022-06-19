// 3

// Array 3 - Tablice 3

// slice() vs splice()

/**
 * Metoda Splice
 *
 * Przykład metody destrukcyjnej (destructive method, mutating method)
 * - zmieniają tablice na której są wywoływane
 * Ta metoda zmienia tablice (modyfikuje) na której jest wykonywana
 * Jeżeli coś wycinamy to możemy to przypisać do nowej tablicy
 * Umożliwia zastąpienie elementów
 * Dodajemy nowe elementy i możemy to przypisać do zmiennej. Będzie nowa tablica z tym czym dodaliśmy
 *
 * Ważne: to co usywam alb dodaje można przypisać do nowej zmiennej (tablicy) i to wykorzystać
 */

const animals = ['dog', 'cat', 'canary', 'mouse', 'cow'];
console.log(animals);

// możemy zastępować elementy i usunięty element przypisac od nowej zmiennej, tablicy
const replacedAnimal = animals.splice(0, 1, 'duck');
console.log(replacedAnimal);

// dodawanie na samym początku Podobny to unshift i możemy przypisać to do zmiennej czyli tablica to co dodano
animals.splice(0,0, 'donkey', 'horse');
console.log(animals);

animals.splice(2, 2); // od indexu 1 usuń dwa elementy = usuń index 2 i 3;
console.log(animals);

const newCutArray = animals.splice(2); // jeżeli coś wycinamy to możemy to przypisać do nowej zmiennej
console.log(newCutArray);

animals.splice(2, 0, 'rat'); // dodajemy nowy element od indexu 2;
console.log(animals);

animals.splice(1); // usuń wszystko od indexu nr 1 włącznie z indexem 1
console.log(animals);

animals.splice(0); // wyzeruje tablice czyli zwróci pustą tablice
console.log(animals);

animals.length = 0; // tak tez można wyczyścić tablice
console.log(animals);

/**
 * Metoda sort - metoda destrukcyjna - uwaga nie działa jak są duże i małe litery
 */

const myAnimals = ['dog', 'cat', 'mouse', 'canary'];
console.log(myAnimals);
myAnimals.sort();
console.log(myAnimals);

/** ------------------------------ */

/**
* Metoda reverse - metoda destrukcyjna - odwraca kolejność
*/

const items = ['cat', 24, 'dog', 15];
console.log(items);
items.reverse();
console.log(items);
