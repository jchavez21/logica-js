const pedidos = [12, 9, 15, 7, 11, 8];
let pedidoMenor = pedidos[0];
let posicionMenor = 0;

for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i] < pedidoMenor) {
        pedidoMenor = pedidos[i];
        posicionMenor = i;
    }
}
console.log("La menor cantidad de pedidos: " + pedidoMenor);
console.log("Jornada " + (posicionMenor + 1));