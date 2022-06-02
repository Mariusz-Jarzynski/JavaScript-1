// 3
// ---- działa w Chrome lub replit
const userName = prompt('What is your name? ');
const userSurname = prompt('What is your surname? ');

function greetUser2(userName, userSurname) {
    const text1 = 'Hej tu ' + userName + ' ' + userSurname;
    // jeśli alert byłby tu, przed log to zatrzymał program i wystąpił dziwny komunikat. Ale działa ok u mnie
    console.log(text1)
    alert(text1);
}
greetUser2(userName, userSurname);  // możemy wpisać zmienne które wcześcniej zadeklarowaliśmy