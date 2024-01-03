// перший спосіб
"use strict";
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol;
        }
        console.log(line);
    }
}
drawTriangle(10, '* ');

// другий спосіб
"use strict";
function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let line = '';
        let j = 1;
        while (j <= i) {
            line += symbol;
            j++;
        }
        console.log(line);
        i++;
    }
}
drawTriangle(5, '+ ');