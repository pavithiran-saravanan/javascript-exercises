const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
  return nums.reduce((sum, n)=>sum+n, 0);
};

const multiply = function(nums) {
  return nums.reduce((sum, n)=>sum*n, 1);
};

const power = function(a, b) {
	let power = 1;
  for(let i = 0; i < b; i++){
    power = power*a;
  }
  return power;
};

const factorial = function(n) {
	let fact = 1;
  for(let i = n; i > 0; i--){
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
