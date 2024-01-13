"use strict";

let services = {
    haircut: 50,
    shaving: 10,
    washing: 80,
};
services.other = 5;
services.Price = function () {
    return Object.values(this).filter(value => typeof value === 'number').reduce((acc, curr) => acc + curr, 0);
};
services.maxPrice = function () {
    return Math.max(...Object.values(this).filter(value => typeof value === 'number'));
};
services.minPrice = function () {
    return Math.min(...Object.values(this).filter(value => typeof value === 'number'));
};
console.log('Total price:', services.Price());
console.log('Maximum price:', services.maxPrice());
console.log('Minimum price:', services.minPrice()); 