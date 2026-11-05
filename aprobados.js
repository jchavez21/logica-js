const notas = [3.5, 4.2, 2.8, 4.8, 3.0, 2.5];
let aprobados = 0;
let reprobados = 0;

for (const nota of notas) {
    if (nota >= 3.0) {
        aprobados = aprobados + 1;
    } else {
        reprobados = reprobados + 1;
    }
}

console.log("Aprobados: " + aprobados);
console.log("Reprobados: " + reprobados);
