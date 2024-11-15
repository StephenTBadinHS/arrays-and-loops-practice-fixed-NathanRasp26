const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(item => !valuesToRemove.includes(item));
};
console.log(removeFromArray([1 , 2 , 3 , 4], 3))
// Do not edit below this line
console.log(removeFromArray);
