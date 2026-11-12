const temperaturas = [18, 24, 27, 21, 29, 26, 19];

let temperaturaMayor = temperaturas[0];
let pocisionMayor = 0;

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > temperaturaMayor) {
        temperaturaMayor = temperaturas[i];
        pocisionMayor = i;
    }
}

console.log("La temperatura mas alta es:", temperaturaMayor);
console.log("Dia",pocisionMayor + 1)

    