
// em uma variavel, armazenamos informações
// e cada informação é de um tipo de dado
// boolean, number, string, undefined, null

// tipo array: armazena uma lista de dados, ou seja,
//             mais de uma informação

/*
const growdevers = ['Pedro', 'Henrique', 'Rodrigo', 'Abner']

growdevers.push('Matheus Moreira')
growdevers.pop()
*/

/*
let nome = 'Edson'
let idade = 15
let altura = 1.5
let peso = 70

let nomes = ['Edson', 'Pedro', 'Abner']
let idades = [15, 29, 10]
let alturas = [1.6, 2.0, 1.4]

// representação de array: []
// representação de objetos: {}


// CHAVE: VALOR
// CARACTERISTICAS === ATRIBUTOS === PROPRIEDADES
let pessoa = {
    nome: 'Edson',
    idade: 27,
    altura: 1.6,
    peso: 70,
    cpf: '00011122233'
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

const venda = {
    valor: 20,
    codigo: 12345,
    vendedor: {
        nome: 'Matheus',
        codigo: '1234',
        email: 'edson@martins.com'
    },
    produtos: ['TV', 'Ar condicionado', 'Computador'],
    formaPagamento: 'Cartao de Crédito'
}

console.log(venda.vendedor.nome)


console.log(venda.produtos[0])

for(let index = 0; index < venda.produtos.length; index++){
    console.log(venda.produtos[index])
}

// const recado1 =  {
//     titulo: 'limpa a casa',
//     descricao: 'descricao do recado',
//     dataCriacao: '31/10/2023'
// }

const recados = []

const novoRecado1 = {
    titulo: 'ir no mercado',
    descricao: 'comprar pao'
}

recados.push(novoRecado1)

const novoRecado2 = {
    titulo: 'ir shopping',
    descricao: 'comprar um notebook'
}

recados.push(novoRecado2)

for (let index = 0; index < recados.length; index++) {
    // console.log(`Titulo: ${recados[index].titulo}, Descrição: ${recados[index].descricao}`)
    const recado = recados[index];
    console.log(`Titulo: ${recado.titulo}, Descrição: ${recado.descricao}`)
}

// const usuario = {
//     email: 'email@gmail.com',
//     nome: 'Edson',
//     senha: '12345'
// }

//

*/



const growdevers = [
    { // 0
        nome: 'Pedro',
        idade: 29,
        email: 'pedro@gmail.com',
        programa: 'PS Full Stack Developer'
    },
    { // 1
        nome: 'Matheus Luz',
        idade: 27,
        email: 'matheus@gmail.com',
        programa: 'PS Full Stack Developer'
    },
    { // 2
        nome: 'Lucas Pires',
        idade: 27,
        email: 'pires@gmail.com',
        programa: 'PS Analista de dados'
    },
    { // 3
        nome: 'Caio',
        idade: 30,
        email: 'caio@gmail.com',
        programa: 'PS UI/UX'
    },
    {
     nome: 'Pedro',
     idade: 38,
     email: 'pedro_2@gmail.com',
     programa: 'PS UI/UX'
 },
]

// for (let index = 4; index < growdevers.length; index++) {
//     const element = growdevers[index];
//     console.log(`Nome: ${element.nome}, Programa: ${element.programa}`)
// }

// growdevers.push({})

// uma lista é um conjunto de dados indexado

// indice inicia no 0 e termina no tamanho da lista -1


// forEach é especifico para percorrer todo o array (substitui o for raiz)
// forEach sempre vai percorrer do primeiro elemento até o ultimo
// growdevers.forEach(function (elemento, posicaoElemento) {
//     console.log(`Indice: ${posicaoElemento}, Nome: ${elemento.nome}, Programa: ${elemento.programa}`)
// })

/*
const nome = prompt('Digite o nome que você está procurando: ')

// serve para encontrar um elemento dentro da lista
// se ele encontrar o elemento, então ele retorna o elemento encontrado
const growdeverEncontrado = growdevers.find(function (elemento) {
    if(elemento.nome === nome){
        return true
    }

    return false
})

console.log(growdeverEncontrado)
*/

const frutas = ['Maçã', 'Pera', 'Melancia', 'Banana', 'Laranja']



const indice = frutas.indexOf('Bergamota')

console.log(indice)

