let unit = 'годин';
let value = 346;
let result;

if (isNaN(value) || value < 0) {
        console.log(`Помилка: введіть позитивне значення`);
} else {     
    switch (unit) {
        case 'годин':
            result = value * 60;
            console.log(`${value} г. це ${result} мін.`);
            break;
        case 'кілометр':
            result = value * 1000;
            console.log(`${value} км. це ${result} м.`);
            break;
        case 'кілограм':
            result = value * 1000;
            console.log(`${value} кг. це ${result} г.`);
            break;
        default:
            console.log(`Помилка: необхідно заповнити одиницю виміру: кілометр, годин або кілограм`); 
    }
}
