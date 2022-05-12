// Dzień 5 – Dodatkowy – instrukcje warunkowe

// switch

const dayOfTheWeek = 'sr';

switch (dayOfTheWeek) {
    case 'pn':
        console.log('Poniedzialek');
        break;
    case 'wt':
        console.log('Wtorek');
        break;
    case 'sr':
        console.log('Sroda');
        break;
    default:
        console.log('Nie wiem jaki dzien tygodzia');
        break;
}

// we can use prompt and then ask user to provide answer

// const dayOfWeek = prompt('Jaki jest dzian tygodnia? Wybierz: pn / wt / sr / czw ');
const dayOfWeek = 'sr';

switch (dayOfWeek) {
    case 'pn':
        console.log('Poniedzialek');
        break;
    case 'wt':
        console.log('Wtorek');
        break;
    case 'sr':
        console.log('Sroda');
        break;
    case 'czw':
        console.log('Czwartek');
        break;
    default:
        console.log("Nie wiem jaki jest dzien tygodnia");
        break;
}

// operator warunkowy, zwany potrujnym
// warunek ? prawda : falsz;
// a ? b : c;
console.log('a ? b : c');

3 > 2 ? console.log('true') : console.log('false');

// or points in the game
console.log('paints in the game')
let score = 0;
console.log(score);
let killedMonsters = 9;
score = killedMonsters > 10 ? 1 : 0;
console.log(score);
killedMonsters = 11;
score = killedMonsters > 10 ? 1 : 0;
console.log(score);




