const precios = [4500, 3200, 5800, 2900, 3700];

let menor = precios[0];

for (let i = 0; i < precios.length; i++) {
    if (precios[i] < menor) {
      menor = precios[i];
    }
}
console.log ("El precio mas bajo es: ", menor);