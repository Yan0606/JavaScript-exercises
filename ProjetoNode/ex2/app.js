const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const produto = 0.50;

teclado.question(
    "Quantos anzois deseja ? ", (valor1) => {
        total = parseInt(valor1) * produto;
        console.log("Resultado: " + total)
        teclado.close;

    });
