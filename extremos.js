const notas = [3.5, 4.2, 2.8, 4.8, 3.0, 2.5];
let notaMayor = notas[0];
let notaMenor = notas[0]; 

for (const nota of notas) {
    if (nota > notaMayor) {
        notaMayor = nota;
        
    }
    if (nota < notaMenor) {
        notaMenor = nota;
    }
}

console.log("La nota mas alta: " + notaMayor);
console.log("La nota mas baja: " + notaMenor);