// 3
class Country {
    constructor(currency, language, currencyConvertRatioToUSD) {
        this.currency = currency;
        this.lenguage = language;
        this.currencyConvertRatioToUsd = currencyConvertRatioToUSD
        this.isShengen = true;
    }
    // funkcja w clasie nazywa się metoda
    convertMoney(valueInLocalCurrency) {
        return valueInLocalCurrency * this.currencyConvertRatioToUsd;
    }
}

const poland = new Country('PLN', 'Polish', 1/4);
console.log(poland);
console.log(poland.convertMoney(20));

const souvenirInPln = 50;
const souvenirInUsd = poland.convertMoney(souvenirInPln);
console.log(souvenirInUsd);