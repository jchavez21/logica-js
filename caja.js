const prompt = require("prompt-sync")({ sigint: true });

const monto = parseInt(prompt("Ingrese el monto de la compra: "));
const pago = parseInt(prompt("Ingrese el dinero con el que paga el cliente: "));
const nombre = prompt("Nombre completo: ");

const cambio = pago - monto;
let resto = cambio;

const billetes10000 = Math.floor(resto / 10000);
resto = resto % 10000;

const billetes5000 = Math.floor(resto / 5000);66
resto = resto % 5000;

const billetes2000 = Math.floor(resto / 2000);
resto = resto % 2000;

const monedas1000 = Math.floor(resto / 1000);
resto = resto % 1000;

console.log("Cliente: " + nombre);
console.log("Cambio: $" + cambio);
console.log("Billetes de 10000: " + billetes10000);
console.log("Billetes de 5000: " + billetes5000);
console.log("Billetes de 2000: " + billetes2000);
console.log("Monedas de 1000: " + monedas1000);
console.log("Sobra: $" + resto);

