const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question(
    "Informe o primeiro valor: ", (valor1)=> {
        teclado.question("Informe o segundo valor: ",(valor2) => {
                    total = (parseInt(valor1) + parseInt(valor2)) /2;
                    if (total >= 6)
                    console.log("APROVADO!")
                    else{
                        console.log("REPROVADO!")
                    }
                    console.log("A média é: " + total)
                    teclado.close;
                })
    });