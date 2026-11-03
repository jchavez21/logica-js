const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

for (let i = 0; i < dias.length; i++) {
  console.log(`Dia ${i + 1}: ${dias[i]}`);
}

for (const dia of dias) {
  console.log(dia);
}

console.log(`Ultimo dia: ${dias[dias.length - 1]}`);