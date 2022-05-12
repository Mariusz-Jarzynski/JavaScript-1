// Cwiczenie z gwiazdka
// .map(), join(), forEach(), Spread Syntax(...), split('');

// Program CrAzY TeXt.

// Napisz taki program, który przyjmie tekst od użytkownika - prompt
// Następnie w pętli wypisz po kolei każdy pojedynczy znak, ale w ten sposób, aby nieparzyste były
// zapisane wielką literą, a parzyste mała.
// np. Hello wyświetl jako
// H
// e
// L
// l
// O
// Ps. poszczególne znaki możesz wyciągac z tekstu jak z tablicy np str[1]

const tekst = 'Hello';
// prompt works in Chrome only not in WebStrom
// const tekst = prompt('Wpisz tekst: ');

for (let i = 0; i < tekst.length; i++) {
    if ((i % 2) === 0) {
        console.log(tekst[i].toUpperCase())
    } else {
        console.log(tekst[i].toLowerCase());
    }
}

console.log('---')
// Second version
// const userText = prompt('Please give me some text');

const userText = 'World';
// split(''); - the split method with empty string will change String into Array
const userTextArray = userText.split('');
console.log(userTextArray);

console.log('---');
// Third version
const userMessage = 'Kowal';
const userMessageArray = [...userMessage];
console.log(userMessageArray);

userMessageArray
    .map((char, i) => {
        if (i % 2 === 0) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    })
 //   .join('') - in Chrome rezult will be kOwAl - one word but should be one below second so we need forEach
    .forEach(char => console.log(char));




