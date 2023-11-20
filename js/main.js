// 1) Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит
// в евро. Курс валюты храните в константе.
const usdToEurExchangeRate = 0.85;

function convertUsdToEur(usdAmount) {
  return usdAmount * usdToEurExchangeRate;
}


// Example usage
const usdAmount = 100;
const eurAmount = convertUsdToEur(usdAmount);
console.log(`${usdAmount} USD = ${eurAmount} EUR`);
alert(`${usdAmount} USD = ${eurAmount} EUR`);



// 2) Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести
// это число и сколько делений произвели.
let number = 1000;
let divisions = 0;

while (number >= 50) {
  number = number / 2;
  divisions++;
}

console.log("Resulting number: " + number);
console.log("Number of divisions: " + divisions);
// 3) Дано число 100. Необходимо посчитать сумму от 0 до 100 (либо наоборот, от 100
// до 0).
// В итоге у вас должно получится значение 5050.
// Сохраните итоговое значение в переменную sum и выведите его на экран при помощи
// alert.
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

alert(sum);
// 4) Пользователь вводит год своего рождения, вывести информацию о возрасте
// пользователя в разные года до текущего.
// Например, вводим «2003». Вывод: «в 2003 было 0 год», «в 2004 было 1 год», «в 2005
// было 2 год» и т.д.
let birthYear = prompt("Введите год вашего рождения:");
let currentYear = new Date().getFullYear();

for (let year = parseInt(birthYear); year <= currentYear; year++) {
  let age = year - birthYear;
  console.log(`В ${year} году вам было ${age} лет`);
}
// 5)
// Решить циклом
// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа
// выводит сколько шоколадок может купить пользователь и сколько сдачи у него
// останется.
let wallet = prompt("Введите сумму денег в кошельке:");
let price = prompt("Введите цену одной шоколадки:");

let chocolates = Math.floor(wallet / price);
let change = wallet % price;

console.log(`Вы можете купить ${chocolates} шоколадок и у вас останется ${change} денег`);