// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let prompt = require('prompt-sync')()

console.log("Menu de Opções:")
console.log("1. somar 2 numeros")
console.log("2. subtrair 2 numeros")
console.log("3. sair") 
let opcao = parseInt(prompt("Escolha uma opção: "))

let n1 = 0
let n2 = 0

switch (opcao) {
    case 1:
        n1 = parseInt(prompt("Digite o primeiro número: "))
        n2 = parseInt(prompt("Digite o segundo número: "))
        let soma = n1 + n2
        console.log("A soma é: " + soma)
        break
    case 2:
        n1 = parseInt(prompt("Digite o primeiro número: "))
        n2 = parseInt(prompt("Digite o segundo número: "))
        let subtracao = n1 - n2
        console.log("A subtração é: " + subtracao)
        break
    case 3:
        console.log("Saindo...")
        break
    default:
        console.log("Opção inválida.")
}