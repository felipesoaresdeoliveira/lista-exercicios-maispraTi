//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let prompt = require('prompt-sync')()
let n1 = parseInt(prompt("Digite um número para calcular o fatorial: "))
let fatorial = 1
for (let i = n1; i > 0; i--) {
    fatorial *= i
}
console.log("O fatorial de " + n1 + " é: " + fatorial)
