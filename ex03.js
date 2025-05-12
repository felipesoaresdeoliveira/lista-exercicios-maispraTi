// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite sua nota (0 a 10): "))

if (nota >= 0 && nota < 4){
    console.log("Você está reprovado.")
}
else if (nota >= 4 && nota < 6){
    console.log("Você está de recuperação.")
}
else if (nota >= 6 && nota <= 10){
    console.log("Você está aprovado.")
}
else{
    console.log("Nota inválida.")
}