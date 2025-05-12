//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let prompt = require('prompt-sync')()
let soma = 0
let contador = 0

while (true) {
    let n1 = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "))
    if (n1 === 0) {
        break
    }
    soma += n1
    contador++
}
if (contador > 0) {
    let media = soma / contador
    console.log("A média aritmética é: " + media)
}