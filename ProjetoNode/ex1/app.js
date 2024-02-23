

const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





teclado.question(
    "Informe o primeiro valor: ", (valor1)=> {
        teclado.question("Informe o segundo valor: ",(valor2) => {
            teclado.question("Informe o terceiro valor: ", (valor3) => {
                teclado.question("informe o quarto valor: ", (valor4)=> {
                    
                    total = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4)/4;
                    console.log("A média é: " + total)
                    teclado.close;
                })
            })
        });
    });
   