/**
 * Create (criação)
 * Read (leitura)
 * Update (atualização)
 * Delete (remoção)
 */

const numeros = [4, 7, 1, 8, 3, 2, 9, 10, 6, 5]

const nomes = ['Pedro', 'Alisson', 'Laio', 'Edson', 'Caio', 'Lucas Santos', 'Lucas Pires']


// para excluir:
// 1 parametro é o indice inicial (ou seja, da onde vai começar a remoção)
// 2 parametro é a quantidade de elementos que deve ser removido, a partir do indice,
//     informado no primeiro parametro
// nomes.splice(4, 1)

// para adicionar:
nomes.splice(3, 1)
nomes.splice(3, 0, 'Sheila', 'Peterson')



console.log(nomes)


// const numerosOrdenado = numeros.sort(function (n1, n2){
//     return n2 - n1
// })

// const nomesOrdenado = nomes.sort() // ordena de forma alfabética

// console.log(nomesOrdenado)



// forEach   => Percorre a lista executando a função fornecida para cada elemento
// filter    => Percorre a lista filtrando os elementos com base na função fornecida e no final retorna a lista filtrada
// find      => Percorre a lista e retorna o primeiro elemento encontrado, com base na função fornecida
// findIndex => Percorre a lista e retorna o indice do primeiro elemento encontrado, com base na função fornecida
// sort      => Ordena a lista e no final retorna a lista ordenada (foco: ordenação crescente, decrescente (numeros) e alfabética)
// splice    => Remove ou/e adiciona elementos em qualquer posição do array

// ESSA NÃO FOI VISTA:
// some      => para verificar se um elemento existe ou não dentro do array