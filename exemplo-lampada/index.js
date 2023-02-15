let lampadaQuebrada = false

function acenderLampada(){
    if(!lampadaQuebrada){
        const lampada = document.getElementById('lampada')
        lampada.src = 'imagens/lampada_acessa.jpg'
    }
}

function apagarLampada(){
    if(!lampadaQuebrada){
        const lampada = document.getElementById('lampada')
        lampada.src = 'imagens/lampada_apagada.jpg'
    }
}

function quebrarLampada(){
    if(!lampadaQuebrada){
        const lampada = document.querySelector('#lampada')
        lampada.src = 'imagens/lampada_quebrada.jpg'
        lampadaQuebrada = true

        // primeira parte: criar o elemento
        const botaoRestaurar = document.createElement('button')
        botaoRestaurar.innerText = 'Restaurar lampada'
        botaoRestaurar.onclick = restaurarLampada
        botaoRestaurar.id = 'btn-restaurar'

        // segunda parte: adicionar o elemento criado aonde
        //                queremos
        const divContainer = document.querySelector('.container')
        divContainer.appendChild(botaoRestaurar)
    }
}

function restaurarLampada(){
    const lampada = document.querySelector('#lampada')
    lampada.src = 'imagens/lampada_apagada.jpg'
    lampadaQuebrada = false
    
    // 
    const btnRestaurar = document.querySelector('#btn-restaurar')
    btnRestaurar.remove()
}