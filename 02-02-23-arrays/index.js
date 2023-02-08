/*
// primitivos
// number, string, boolean, null, undefined, unknown, Function

// Array = Vetor = Lista
// [] => defini um array
let nomesGrowdevers = ['Pedro', 'Sheila', 'Lucas Pires', 'Lucas Santos']

let primos = [2, 3, 5, 7, 11]

let modulos = [] // => lista vazia

console.log(nomesGrowdevers)
console.log(nomesGrowdevers[3])

// array é uma lista de elementos indexada
// todo elemento dentro de uma lista, está em um indice

// o indice inicial sempre vai ser o indice 0

// em um array, qual será o último indice? o tamanho da lista - 1

let nome = 'Abner'
nome = 'Edson'

nomesGrowdevers[1] = 'Abner'
nomesGrowdevers[4] = 'Rodrigo'
console.log(nomesGrowdevers)

*/

/*

const growdevers = [];
console.log(growdevers)

growdevers.push('Rodrigo')
console.log(growdevers)

growdevers.push('Caio')
console.log(growdevers)

growdevers.push('Sheila', 'Peterson', 'Laio')
console.log(growdevers)

growdevers.unshift('Pedro')
console.log(growdevers)

// push => adiciona o elemento no final da lista
// pop => remove o último elemento da lista
// unshift => adiciona o elemento no inicio da lista
// shift => remove o primeiro elemento da lista

// MÉTODO (method) = FUNÇÃO (function) => MESMA COISA
growdevers.pop()
console.log(growdevers)

growdevers.pop()
console.log(growdevers)

growdevers.shift()
console.log(growdevers)

*/


const growdevers = ['Natan', 'Gabriel', 'Lucas Pires', 'Sheila', 'Caio']
// console.log(growdevers[0])
// console.log(growdevers[1])
// console.log(growdevers[2])
// console.log(growdevers[3])
// console.log(growdevers[4])


// 0 ... 4
for(let indice = 0; indice < growdevers.length; indice++){
    console.log(`O nome do growdever é: ${growdevers[indice]}`)
}

const numeros = [2, 4, 6, 9, 10]

for (let indice = 0; indice < numeros.length; indice++) {
    const elemento = numeros[indice]
    const dobro = elemento * 2
    console.log(`O dobro do número ${elemento} é: ${dobro}`)
}
