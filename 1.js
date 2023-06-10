const tC = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "))
console.log(tC)
const tF = (tC * 9 / 5 + 32)
alert (`Цельсий: ${tC}, Фаренгейт: ${tF.toFixed(2)}`)