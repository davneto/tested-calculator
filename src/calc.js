const operations = require('./operations.js');
const readline = require('readline'); //built in Node.js command line interface

// Use readline to create command line interface
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js

Welcome to Node.js calculator app!
Version: 1.0.0.

Usage: Please introduce two numbers followed by the operation of choice.
`);

cli.question('First number: ', (x) => {
  cli.question('Second number: ', (y) => {
    cli.question(`
Operations:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (*)
[4] Division (/)

Enter your choice: `, (choice) => {
// additional code to be added here
	if (!operations.validateNumbers(x, y)) {
	  console.log('Only numbers are allowed! Please restart the calculator.');
	} else {
	  switch (choice) {
	    case '1':
	      console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
	      break;
	    case '2':
	      console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
	      break;
	    case '3':
	      console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
	      break;
	    case '4':
	      console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
	      break;
	    default:
	      console.log('Please restart the calculator and select a number between 1 and 4.');
	      break;
	  }
	}
	cli.close();
    });
  });
});