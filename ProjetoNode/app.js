console.log("olá mundo!");

const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





teclado.question(
    "Informe o primeiro valor: ", (valor1)=> {
        teclado.question("Informe o segundo valor: ",(valor2) => {
            total = parseInt(valor1) + parseInt(valor2);
            console.log("Resultado: " + total)
            teclado.close;
        });
    });
   