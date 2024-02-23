const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


teclado.question(
    "Informe a base : ", (base) => {
        teclado.question("Informe a altura: ", (altura) => {
            total = parseInt(base) * parseInt(altura) ;
            console.log("A área é : " + total)
            teclado.close;

            if (altura > base)
            console.log("É um reatangulo")
            else if (altura < base)
            console.log("É um retangulo")
            else 
            console.log("é um quadrado")
        })
    });
