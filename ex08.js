//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: "))

if (n1 == n2) {
    console.log("Os numeros nao podem ser iguais")
}
else{
    console.log("Os números em ordem decrescente são: ")
    if (n1 < n2) {
        console.log(n1)
        console.log(n2)
    }
    else {
        console.log(n2)
        console.log(n1)
    }
}