const readlineSync = require('readline-sync');

let num1 = readlineSync.keyIn('What is your first number? ');

let num2 = readlineSync.keyIn('What is your second number? ');

let add = Number(num1) + Number(num2)
let sub = Number(num1) - Number(num2)
let div = Number(num1) / Number(num2)
let mul = Number(num1) * Number(num2)

readlineSync.setDefaultOptions({limit: ['a', 's', 'm', 'd']});

let operator = readlineSync.keyIn('Do you want to (a)dd, (s)ubstract, (d)ivide, or (m)ultiply? ');


switch(operator){
  case 'a':
    console.log(add)
    break;
  case 's':
    console.log(sub)
    break;
  case 'd':
    console.log(div)
    break;
  case 'm':
    console.log(mul)
    break;
}
    // if (operator === 'a'){
    //   console.log(add)
    // } else if (operator === 's'){
    //   console.log(sub)
    // } else if (operator === 'd'){
    //   console.log(div)
    // } else if (operator === 'm'){
    //   console.log(mul)
    // }