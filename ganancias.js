const ganancias = [45000, 62000, 38000, 71000, 55000, 80000, 49000];
let totalGanancia = 0;
let diasSobre50k = 0;
let gananciaMayor = ganancias[0];
let posicionMayor = 0;

for(let i = 0; i < ganancias.length; i++) {
    totalGanancia = totalGanancia + ganancias[i];
    if(ganancias[i] >= 50000) {
        diasSobre50k = diasSobre50k + 1;
    }
    if(ganancias[i] > gananciaMayor) {
       gananciaMayor = ganancias[i];
       posicionMayor = i; 
    }
}
console.log("Total ganado en la semana: " + totalGanancia);
console.log("Dias en los que gano 50000 o mas: " + diasSobre50k);
console.log("Dia " + (posicionMayor + 1));