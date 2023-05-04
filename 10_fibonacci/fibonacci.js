const fibonacci = function(n) {
    // We have to return the nth fib number
    n = +n;
    if(n < 0) return 'OOPS';
    if(n <= 2) return 1;
    let first = 1, second = 1, third = 0;
    for(let i = 3; i <= n; i++){
        third = first + second;
        first = second;
        second = third;
    }
    return third;
};

// Do not edit below this line
module.exports = fibonacci;
