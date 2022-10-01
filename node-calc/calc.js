const readLineSync = require('readline-sync');

let num1 = readLineSync.keyIn('What is your first number? ');
console.log(num1);

let num2 = readLineSync.keyIn('What is your second number? ');
console.log(num2);

const operator = readLineSync.keyIn('Do you want to (a)dd, (s)ubstract, (d)ivide, or (m)ultiply? ', {
  if (add) {
    console.log(add(num1 + num2));
  }
});