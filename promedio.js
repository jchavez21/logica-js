const notas = [3.5, 4.2, 2.8, 4.8, 3.0, 2.5];

let suma = 0;
for (const nota of notas) {
    suma = suma + nota;
}
const promedio = suma / notas.length;
console.log(`suma: ${suma}`);
console.log(`promedio: ${promedio.toFixed(2)}`);

