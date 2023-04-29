const reverseString = function(str) {
    revStr = '';
    for(let i = str.length; i >= 0; i--){
        revStr = revStr + str.charAt(i);
    }
    return revStr;
};

/*
Strings in javascript cannot be reversed as it is.
Strings have to be split into something, next reversed and form strings again
*/

// Do not edit below this line
module.exports = reverseString;
