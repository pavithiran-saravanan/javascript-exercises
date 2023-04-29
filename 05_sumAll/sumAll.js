const sumAll = function(num1, num2) {
    // Return error for non numeric values and negative numbers
    if(typeof 1 != typeof num1 || typeof 1 != typeof num2 || num1 < 0 || num2 < 0) return 'ERROR';
    // Swap num1 and num2 if num1 is greater
    if(num1>num2) [num1, num2] = [num2, num1];
    let sum = 0;
    for(let i = num1; i <= num2; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
