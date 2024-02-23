


const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question(
    "Informe o numero: ", (num1) => {
        teclado.question("Informe o segundo numero: ", (num2) => {
           total = Math.max;
            console.log(  "O maior entre eles é : " + Math.max([num1], [num2]))
            teclado.close;
        });
    });

