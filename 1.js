const celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
console.log(celsius);
const fahrenheit = celsius * 9 / 5 + 32;
alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit.toFixed(2)}`);
