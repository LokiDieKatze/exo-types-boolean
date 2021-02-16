let isRainy = true
let temperature = 26
let clothes = ''
let isSunny = true

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}
if (isSunny && !isRainy) {
  clothes += 'sunglasses, '
}
if (isSunny && temperature >= 25 && !isRainy) {
  clothes += 'sunscreen, '
}
if (temperature < 10) {
  clothes += 'winter jacket, scarf, gloves, '
}
else if (temperature >= 10 && temperature <= 15) {
  clothes += 'coat, '
}
else if (temperature > 15 && temperature <= 20) {
  clothes += 'sweater, pants, sneakers '
}
else if (temperature > 20 && temperature <= 25) {
  clothes += 'long sleeves, pants, sneakers, '
}
else if (temperature > 25 && !isRainy) {
  clothes += 'T - Shirt, Shorts, Flip flops, '
}
else if (temperature > 25 && isRainy) {
  clothes += 'T-Shirt, Shorts, sneakers, '
}

console.log(`Je vous recommande de porter: ${clothes}`)