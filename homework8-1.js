 "use strict";


let color = {
    first: 'blue',
    second: '#B22222',
    third: 'red',
    getInfo() {
        return `first: '${this.first}', second: '${this.second}', third: '${this.third}'`;
    },
    newProperty() {
        console.log(this.excludeMethods());
    },
    excludeMethods() {
        return Object.fromEntries(Object.entries(this).filter(([key, value]) => typeof value !== 'function'));
    }
};
color.fourth = 'pink';
color.fifth = 'yellow';
color.sixth = '#FF0000';
console.log(color.getInfo());
color.newProperty();
