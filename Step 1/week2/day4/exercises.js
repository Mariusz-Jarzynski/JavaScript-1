// 5
// Exercise 1
/*
1. Stwórz klase Country
2. Stwórz właściwość przechowującą zajęte miejsca w zawodach.
3. Stwórz metodę, która pozwoli dodać nowe zajęte miejsce do właściwości danego obiektu.
4. Stwórz dwa obiekty reprezentujące 2 kraje i dodaj do nich kilka zajętych miejsc,
używając przygotowanej przes siebie metody możesz ją wywoływac wielokrotnie).
5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce
i jeżeli tak to wyświetl "Brawo!".
*/

class Country {
    constructor(countryName) {
        this.countryName = countryName;
        this.competitionPlace = [];  // właściwość klasy, przechowujące jakieś dane
    };

    addNewCompetitionPlace(placeNumber) {
        this.competitionPlace.push(placeNumber);
    };

    showAnyFirstPlace() {
        for (let i = 0; i < this.competitionPlace.length; i++)
            if (this.competitionPlace[i] === 1) {
                console.log('Yes, congratulation');
                break; // jeśli warunek jest spełniony, został odnaleziony w tablicy to zakończ pentle
                // jak w tablicy znajdziemy nr 1 to dalej już nie szukamy, nawet jeśli jest jeszcze więcej nr 1
            }
    };

}

const poland = new Country('Poland');
const ukraine = new Country('Ukraine');

poland.addNewCompetitionPlace(2);
poland.addNewCompetitionPlace(1);
poland.addNewCompetitionPlace(3);
poland.addNewCompetitionPlace(1);

ukraine.addNewCompetitionPlace(1);

//  szybsze rozwiązanie i nawet nie potrzeba metody dodawania do tablicy bo
// skoro competitionPlace to tablica to możemy użyć push()
poland.competitionPlace.push(3);
// --- sprawdzamy obiekty poland and ukraine

console.log(poland);
console.log(ukraine);

// 5 - zadanie
console.log('---');

console.log(poland.competitionPlace);
poland.showAnyFirstPlace();



