//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

 let prompt = require('prompt-sync')()
 let seq = prompt("Digite quantos números da sequência de Fibonacci você deseja ver: ")

 let a = 0, b = 1, c = 0
    console.log("Sequência de Fibonacci:")
    for (let i = 0; i < seq; i++) {
        console.log(a)
        c = a + b
        a = b
        b = c
    }
    