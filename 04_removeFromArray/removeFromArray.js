// Solution-1
// const removeFromArray = function(arr) {
//     // Iterate over each of the arguments
//     for(let i = 1; i < arguments.length; i++){
//         let index = arr.indexOf(arguments[i]);
//         if(index != -1){
//             arr.splice(index, 1);
//         }
//     }
//     return arr;
// };

// Solution-2
const removeFromArray = function(arr, ...args) {
    // Iterate over each of the arguments
    for(let arg of args){
        let index = arr.indexOf(arg);
        if(index != -1){
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
