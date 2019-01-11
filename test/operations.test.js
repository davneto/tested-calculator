const operations = require('../src/operations.js');
const assert = require('assert');

//add
it('correctly calculates the sum of 2 and 5', () => {
  assert.equal(operations.add(2, 5), 7);
});
it('correctly calculates the sum of casted numbers "2" and "5"', () => {
  assert.equal(operations.add('2', '5'), 7);
});
it('correctly calculates the sum of 1.35 and -2', () => {
  assert.equal(operations.add(1.35, -2), -0.65);
});

//subtract
it('correctly calculates the difference of 10 and 2', () => {
  assert.equal(operations.subtract(10, 2), 8);
});
it('correctly calculates the difference of casted numbers "3" and "-3"', () => {
  assert.equal(operations.subtract("3", "-3"), 6);
});
it('correctly calculates the difference of -1 and 1', () => {
  assert.equal(operations.subtract(-1, 1), -2);
});

//multiply
it('correctly calculates the product of 2 and 3', () => {
  assert.equal(operations.multiply(2, 3), 6);
});
it('correctly calculates the product of casted numbers "3" and "-3"', () => {
  assert.equal(operations.multiply("3", "-3"), -9);
});
it('correctly calculates the product of -1 and 1', () => {
  assert.equal(operations.multiply(-1, 1), -1);
});

//divide
it('correctly calculates the quocient of 6 and 2', () => {
  assert.equal(operations.divide(6, 2), 3);
});
it('correctly calculates the quocient of casted numbers "12" and "3"', () => {
  assert.equal(operations.divide("12", "3"), 4);
});
it('correctly handles division by 0 when calculating the quocient of 10 and 0', () => {
  assert.equal(operations.divide(10, 0), 'division by zero');
});
it('correctly handles division by 0 when calculating the quocient of casted numbers of "10" and "0"', () => {
  assert.equal(operations.divide("10", "0"), 'division by zero');
});
it('correctly handles division by a negative number when calculating the quocient of 10 and -2', () => {
  assert.equal(operations.divide(10, -2), -5);
});
it('correctly handles division by a negative number when calculating the quocient of casted number of "10" and "-2"', () => {
  assert.equal(operations.divide("10", "-2"), -5);
});


//validating user inputs
it('indicates false when a string is provided instead of a number for the first parameter', () => {
  assert.equal(operations.validateNumbers('text', 1), false);
});
it('indicates false when a string is provided instead of a number for the second parameter', () => {
  assert.equal(operations.validateNumbers(1, 'text'), false);
});
it('indicates false when a boolean is provided instead of a number for the first parameter', () => {
  assert.equal(operations.validateNumbers(true, 1), false);
});

it('indicates false when an undifined variable is provided instead of a number for the first parameter', () => {
  var undifinedVariable;	
  assert.equal(operations.validateNumbers(undifinedVariable, 1), false);
});