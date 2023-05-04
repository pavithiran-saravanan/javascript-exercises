const palindromes = function (str) {
    res = "";
    Array.from(str).forEach((c)=>{
        if(c != ' ' && c != '.' && c != ',' && c != '!') res = res + c;
    })
    res = res.toLowerCase();

    reverse = res.split('').reverse().join('');
    return res == reverse;
};

// Do not edit below this line
module.exports = palindromes;
