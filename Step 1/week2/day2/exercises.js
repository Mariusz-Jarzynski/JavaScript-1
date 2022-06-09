// exercises
// Za pomocą Prompt w Chrome wprowadź 3 razy imię i nazwisko (do tablicy i wyświetlić)
// prompt - dziąła w Chrome

function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

// const person1 = new Student('Ala', 'Nowak');

const ourClass = [];
for (let i = 1; i <=3; i++) {
    ourClass[i] = new Student(prompt('Imie: '), prompt('Nazwisko: '));
}

console.log(ourClass);

// drugie rozwiązanie
const ourClass2 = [];
for (let i = 1; i <=3; i++) {
    const sutdentName = prompt('What is name of student # ' + i);
    const studentSurname = prompt('What is last name of student # ' + i);

    const student = new Student(sutdentName, studentSurname);
    ourClass2.push(student);
}

console.log(ourClass2);

// trzecie rozwiązanie
const ourClass3 = [];
for (let i = 1; i <= 3; i++) {
    ourClass2.push(new Student
        (prompt('What is name of student # ' + i),
        prompt('What is last name of student # ' + i)));
}

console.log(ourClass3);








