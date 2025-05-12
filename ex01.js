// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

let prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite um número inteiro: "));
if (n1 % 2 === 0){
    console.log("O número " + n1 + " é par.");
} else {
    console.log("O número " + n1 + " é ímpar.");
}