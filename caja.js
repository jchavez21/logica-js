const prompt = require("prompt-sync")();

let monto = parseInt(prompt("ingrese el monto: "));
let pago = parseInt(prompt("ingrese el pago: "));
let nombre = prompt("ingrese el nombre completo del cliente(nombre y apellido):"); 

let cambio = pago - monto;
let resto = cambio;

let billetes10000 = Math.floor(resto/10000);
resto = resto % 10000;

let billetes5000 = Math.floor(resto/5000);
resto = resto % 5000;

let billetes2000 = Math.floor(resto/2000);
resto = resto % 2000;

let monedas1000 = Math.floor(resto/1000);
resto = resto % 1000;

console.log("Cliente: " + nombre);
console.log("Cambio: $" + cambio);
console.log("Billetes de 10000: "+ billetes10000);
console.log("Billetes de 5000: " + billetes5000);
console.log("Billetes de 2000: " + billetes2000);
console.log("Monedas de 1000: " + monedas1000);
console.log("Sobra: $" + resto);

