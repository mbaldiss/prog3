// Trabajo practico 2
// Baldissone Marco

const numbersNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 999];

let addition = 0;

numbers.forEach(number => addition += number);

const resultNumberNames = addition.toString().split("").map(number => numbersNames[number]);

console.log(resultNumberNames);