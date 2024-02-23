const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFatorial(num1){
    if (num1 === 0 || num1 === 1)
                return 1;
                else {
    for (var i = num1 - 1; i >= 1; i--) {
        num1 *= i;
    }
    return num1;
    }
}


teclado.question(
    "Informe o numero: ", (num1) => {
       
            valor = calcularFatorial(num1);
            console.log("o fatorial do numero é : " + valor )
            teclado.close;
        });
