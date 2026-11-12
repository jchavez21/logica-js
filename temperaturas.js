const temperaturas = [18, 24, 27, 21, 29, 26, 19];

let diasCalurosos = 0;
let minima = temperaturas[0];

for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] > 25) {
    diasCalurosos++;
  }
  if (temperaturas[i] < minima) {
    minima = temperaturas[i];
  }
}

if (temperaturas.length === 0) {
  console.log("No hay temperaturas registradas");
} else {
  console.log("Dias con mas de 25 grados: " + diasCalurosos);
  console.log("Temperatura mas baja de la semana: " + minima);
}