const propinas = [3000, 5000, 2000, 7000, 4000];

let mayor = propinas[0];
let posicion = 0;

for (let i = 1; i < propinas.length; i++) {
  if (propinas[i] > mayor) {
    mayor = propinas[i];
    posicion = i;
  }
}

console.log("Propina mas alta: " + mayor);
console.log("Jornada " + (posicion + 1));