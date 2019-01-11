
// const add = (x, y) => (+x) + (+y);
const add = (x, y) => +((+x) + (+y)).toFixed(12); //accounts for real values precision limitations, e.g.(add(1.35 + -2))
const subtract = (x, y) => +((+x) - (+y)).toFixed(12); 
const multiply = (x, y) => +((+x) * (+y)).toFixed(12); 
const divide = (x, y) => {
	return y===0 || y==='0' ? 'division by zero' : ( +((+x) / (+y)).toFixed(12) );
	}  

const validateNumbers = (x, y) => !(isNaN(x) || isNaN(y)); 

module.exports = { add, subtract, multiply, divide, validateNumbers }