// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

let prompt = require('prompt-sync')()

console.log("Calculadora de IMC")
let peso = parseFloat(prompt("Digite seu peso (em kg): "))
let altura = parseFloat(prompt("Digite sua altura (em metros ex. 1.74): "))

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Seu IMC é: " + imc) 
    console.log("Você está abaixo do peso.")
}
else if (imc >= 18.5 && imc < 24.9){
    console.log("Seu IMC é: " + imc) 
    console.log("Você está com peso normal.")
}
else if (imc >= 25 && imc < 29.9){
    console.log("Seu IMC é: " + imc) 
    console.log("Você está com sobrepeso.")
}
else{
    console.log("Seu IMC é: " + imc) 
    console.log("Você está obeso.")
}