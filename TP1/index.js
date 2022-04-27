// Trabajo practico 1
// Baldissone Marco

const numbersNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 999];

let sum = 0;

numbers.forEach(number => sum += number);

const resultNumberNames = sum.toString().split("").map(number => numbersNames[number]);

console.log(`The sum of all the numbers is: ${sum}`);
console.log(resultNumberNames);