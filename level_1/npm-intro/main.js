const readlineSync = require('readline-sync');

let name = readlineSync.question('May I have your name? ', {
  
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

console.log('Hi ' + name + '!');

let favFood = readlineSync.question('What is your favorite food? ', {
  
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

console.log('Oh, ' + name + ' loves ' + favFood + '!');