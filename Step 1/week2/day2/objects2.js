// 3
// Week 2 – Day 2 (7 z 25) – Obiektowość – Additional – Objects

// Tworzymy obiekt

// operator new i konstruktor obiektu (funkcja)

// 1 - tworzymy obiekt, pusty obiekt

const cat = new Object();

// 2 - przypisujemy mu właściwości

cat.name = 'Gacek';
cat['surname'] = 'Maly'; // notacji z nawiasem kwadratowym używamy jeśli nazwa składa się z 2 wyrazów
cat['age'] = 2;
cat['eye color'] = 'red'; // tak jak tutaj. Zapisujemy jako string
cat.skin_color = 'brown'; // lepiej tak zapisywać anieżeli ze spacją. Pożniej łatwiej jest się odwołać do niego
cat.meow = function () {
    console.log('miau miau');
};

console.log(cat);

console.log('---');
// invoking - wywołanie, uruchamiać program, odwoływać, przywoływać (np do Boga, pomoc);
console.log(cat.name);
console.log(cat.meow());
// albo tak też można zapisać ale nie poleca się
console.log(cat['meow']());

// literał obiektu {} - efekt jest taki sam co przy konstruktorze

// 1 - tworzymy pusty obiekt, bez właściwości

const hamster = {};

// 2 - tworzymy obiekt i od razu przypisujemy właściwości

const dog = {
    name: 'Riko', // przecinek na końcu każdej dodanej właściwości
    age: 7,
    'eye color': 'black',
    barking: function () {  // metody obiektu (to są funkcje)
        console.log('hau hau');
    },
    // ES6 - nowy sposób
    squeaking() {
        console.log('aaa uuu eee');
    }, // przecinek na końcu
};

// 3 - możemy dynamicznie dodawać (zmieniać) właściwości
dog.surname = 'Duzy';
dog.children = ['bobik', 'jagódka', 'muszka'];

// dostęp do właściwości i metod
console.log(dog.surname);
console.log(dog.squeaking());

// Usuwanie

delete dog.children;

// Przykład 1
// Odwoływanie do obiektu w innej fukncji

const result = {
    value: 1,
};

function plus() {
    return result.value++;
}

console.log(result);
console.log(result.value);
console.log('---');
console.log(plus());
console.log(plus());

console.log('--- Example no 2 ---');
// Przykład 2
// Odwołanie do obiektu w metodzie (this)

// wersja bez this

const counter = {
    score: 0,
    increment: function () {
        counter.score++;
        console.log(counter.score);
    },
};

// wersja z this

const counter2 = {
    score2: 0,
    increment2: function () {
        this.score2++;
        console.log(this.score2);
    },
};

counter.increment();
counter2.increment2();
counter.increment();