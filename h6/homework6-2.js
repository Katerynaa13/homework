"use strict";

function calculateTotal(number) {
    let sum = 0;
for (let i=1; i<=number; i++) {
    if (i%3 == 1 || i%3 == 2) { 
        sum += i;
    }  
}
return sum;
}
console.log(calculateTotal(100));