//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let prompt = require('prompt-sync')()
let n1 = parseInt(prompt("Digite um número para ver a tabuada: "))
console.log("Tabuada do " + n1 + ":")

for (let i = 1; i <= 10; i++) {
    let resultado = n1 * i
    console.log(n1 + " x " + i + " = " + resultado)
}