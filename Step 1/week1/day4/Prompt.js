// uwaga to się wykona tylko w Chromie lub replit.
let answer;
// nie ważne co użytkownik wpisze liczbe czy tekst, to i tak zawsze będzie odczytywane jako tekst
// dlatego sprawdzamy czy podana wartość = 10 jako tekst
while (answer !== '10') {
    answer = prompt('Zgadniej ile to 2 * 5');
    console.log('Niestety, spróbój jeszcze raz');
}
alert('Gratulacje');