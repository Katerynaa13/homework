"use strict";

function myFunctionIsNaN(value) {
    return typeof value === 'number' && value !== value;
}
console.log(myFunctionIsNaN(NaN));
console.log(myFunctionIsNaN(123));
console.log(myFunctionIsNaN('hello'));
console.log(myFunctionIsNaN(undefined));
console.log(myFunctionIsNaN('123'));