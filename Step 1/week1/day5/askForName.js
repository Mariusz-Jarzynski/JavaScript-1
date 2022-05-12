// Stwórz progrram, który przyjmie od użytkownika przez prompt imię, a następnie nazwisko, na końcu wiek(3 prompty)
// Tylko jeżeli wiek to min 18 to wyświetli w konsoli imie i nazwisko

// prompt - działać będzie tylko w Chromie lub w Replit, codepen

const name = prompt('Podaj imię: ');
const surname = prompt('Podaj nazwisko: ');
const age = prompt('Podaj wiek: ');

if (age >= 18) {
    console.log(`${name} ${surname} ${age}`);
    window.alert(`${name} ${surname} is ${age} years old`);
} else {
    console.log('Jesteś za młody');
    alert('You are to young!');
}



