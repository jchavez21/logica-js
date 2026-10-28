const prompt = require("prompt-sync")({ sigint: true });

const minutosTotales = parseInt(prompt("cantidad de minutos: "));

const horas = Math.floor(minutosTotales/60);
const minutos = minutosTotales % 60;

console.log("Horas: " + horas);
console.log("Minutos: " + minutos);
