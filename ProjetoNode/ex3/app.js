const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



teclado.question(
    "Informe a tensão aplicada: ", (tensão) => {
        teclado.question("Informe a corrente elétrica: ", (corrente) => {
            resistencia = parseInt(corrente) / parseInt(tensão);
            console.log("A resistencia é : " + resistencia)
            teclado.close;
        })
    });
