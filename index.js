/*
function arrumarQuarto(){
    // corpo da função

    console.log('Dobrar roupas que estão em cima da cama')

    console.log('Guardar as roupas dobradas no roupeiro')

    console.log('Arrumar a cama')
}

// chamada da função
arrumarQuarto()
*/

/*
// função com parametro

function fazerComida(comida) {

    // se for strognoff

    console.log('pica a carne')

    console.log('pica cebola')

    console.log('coloca a carne no fogo')

    console.log('coloca a cebola')

    //..

    // se for carreteiro

    // ....
}

fazerComida('Arroz com carne moída')

fazerComida('Strogonoff de carne')
*/

// função com parametros e retorno
/*
function comprarProduto(dinheiro, produto){
    console.log('Ir ao mercado apé')

    console.log(`Ir até a prateleira para comprar o ${produto}`)

    let valorProduto = 2.99
    console.log(`O ${produto} custa ${valorProduto}`)

    console.log(`Levar o ${produto} até o caixa`)

    const troco = dinheiro - valorProduto

    console.log('Pagar')

    console.log(`Troco: ${troco}`)

    console.log('Ir para casa apé')

    console.log(`Entregar o ${produto} para quem chamou`)

    return produto;
}


const produtoComprado = comprarProduto(10.00, 'Pao')

console.log('')
console.log(`O produto ${produtoComprado} foi comprado e entregue`)




// 311
function ePrimo(numero){
    if(numero < 2){
        return false;
    }

    if(numero === 2){
        return true;
    }

    // primo === divisivel por 1 e por ele mesmo
    // 1, 311
    // 2 ... 156
    for (let index = 2; index <= parseInt(numero/2)+1; index++) {
        if(numero % index === 0){
            return false;
        }    
    }

    return true;
}

const numeroUsuario = Number(prompt('Digita um número'))

const numeroEPrimo = ePrimo(numeroUsuario)

if(numeroEPrimo){
    console.log(`O número ${numeroUsuario} é primo`)
} else {
    console.log(`O número ${numeroUsuario} não é primo`)
}

function funcaoSemParametro(){}

function funcaoComParametro(p1) {  }

function funcaoComParametroERetorno(p1, p2){
    return 'resultado a ser retornado'
}

*/

function atividade1(){
   alert('Função para fazer o login') 
}

function atividade1(){
    alert('Função para fazer o login') 
 }