const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return true;
    } else {
        return false
    }

};
console.log(leapYears(2000));
console.log(leapYears(1985));
// Do not edit below this line
console.log(leapYears);
