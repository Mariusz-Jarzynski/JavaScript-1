// Operator rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy
// ...nazwa (dowolna, zgodnie z zasadami dla zmiennej)
// zwraca tablicję (arguments nie jest tablicą)

function showAllItems(...items) {
    console.log(items);
    console.log(arguments);
    return items;
}

showAllItems(12, 'Paul', 'Smith', 65);

console.log('---');
// funkcja ma dodać wszystkie słowa
function addAllWords(...words) {
    let txt ='';
    for (let i = 0; i < words.length; i++) {
      //  txt += words[i] + ' '; // ES5
        txt += `${words[i]} `; // ES6
    }
    console.log(txt); // wyciągamy z tablicy
}

addAllWords('Jan', "Waldek", 'Pawel');

// forEach
function addAllNames(...names) {
    let allNames = '';
    names.forEach(function (name) {
        allNames += name + ' '; // aby była spacja pomiędzy imionami
    })
    console.log(allNames);
}

addAllNames('John', "Waldek", 'Jurek', 'Kamila');

//

function allAllSurnames(...surnames) {
    let allSurnames = '';
    surnames.forEach(surname => allSurnames += surname + ' ');
    console.log(allSurnames);
}

allAllSurnames('Kowalski', 'Nowak', 'Jankowski');

// dzięki operatorowi rest możemy zbierac pozosłate argumenty
// (które zostały umieszczone poza argumentami)

function showUsers(owner, ...others) {
    console.log(`Na imprezie był ${owner} ${owner.length ? 'oraz ' + others + '.' : '.'}`);
    // jeśli ? zrób gdy prawda : zrób gdy fałsz , gdy length = 0 to jest fałsz; gdy > 0 to prawda
}

showUsers('Janek', 'Pawel', 'Adam', 'Tomek');

// Metody a funkcje
// Metody to funkcje ale nie wszytkie funkcje to metody
// Metody to funkcje umieszczone w obiekcie

const objectExample= {
    name: Adam,
    showName: function () {   // to jest metoda a nie funkcja bo jest, znajduje się w obiekcie
        console.log('Jan');
    },
}

// to jest fukncja

function showName () {
    console.log('Jan');
}


