const sumAll = function(num1, num2) {
    let start = Math.min(num1 , num2);
    let end = Math.max(num1 , num2);
    let sum = 0

    for (let i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};
console.log(sumAll(1 , 4));
// Do not edit below this line
console.log(sumAll);
