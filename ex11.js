//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let prompt = require('prompt-sync')()

let soma = 0

for (let i = 1; i <=5; i++){
    let n1 = parseInt(prompt("Digite o " + i + "º número: "))
    soma += n1
}

console.log("A soma total é: " + soma)