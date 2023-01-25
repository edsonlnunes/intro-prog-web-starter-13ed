/*
let somaIdades = 0
let qtdAlunos = 0

let deveContinuarPedindoIdade = true

// while(deveContinuarPedindoIdade){
//     let idade = Number(prompt('Digite a idade')) 

//     if(idade == 999){ 
//         deveContinuarPedindoIdade = false;
//     } else {
//         somaIdades += idade
//         qtdAlunos++
//     }
// }

do {
    let idade = Number(prompt('Digite a idade')) 

    if(idade == 999){ 
        deveContinuarPedindoIdade = false;
    } else {
        somaIdades += idade
        qtdAlunos++
    }
} while(deveContinuarPedindoIdade)

const mediaIdades = somaIdades / qtdAlunos
 
console.log(`A média dos ${qtdAlunos} alunos é: ${mediaIdades} anos`)
*/

// let contador = 1;

// while(contador <= 15){
//     console.log(contador)
//     contador++
// }

// let contador = 15

// while(contador >= 1){
//     console.log(contador)
//     contador -=2
// }

// o início, o fim (condição), o incremento/decremento

for(let contador = 1 ; contador <= 15 ; contador++){
    console.log(contador)
}

// for(let contador = 15; contador >= 1; contador -= 2){
//     console.log(contador)
// }