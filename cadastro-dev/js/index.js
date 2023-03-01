// const inputEmail = document.querySelector('#email')
// console.log(inputEmail.value)

const devs = JSON.parse(localStorage.getItem('listaDevs') ?? '[]')

function cadastrarDev(eventoSubmit){
    eventoSubmit.preventDefault()

    const form = document.querySelector('#formularioCadastro')

    const tecnologias = []

    for (const inputTecnologia of form.tecnologia) {
        if(inputTecnologia.checked){
            tecnologias.push(inputTecnologia.value)
        }
    }

    const dev = {
        id: proximoId(),
        nome: form.nomeCompleto.value,
        dataNascimento: form.dataNascimento.value,
        email: form.email.value,
        whats: form.whats.value,
        endereco: form.enderecoCompleto.value,
        pretensaoSalarial: form.pretSalarial.value,
        areaAtuacao: form.areaAtuacao.value,
        senioridade: form.senioridade.value,
        tecnologias: tecnologias,
        experiencia: form.experiencia.value,
    }

    devs.push(dev)

    // JSON.stringfy => Converter qualquer valor (number, object...) para string
    localStorage.setItem('listaDevs', JSON.stringify(devs))
}

function navegarParaLista(){
    location.href = 'lista-devs.html'
}

function proximoId(){
    let id = devs.map(function (dev){
        return dev.id
    }).reduce( function (maior, proximo){
        if(proximo > maior){
            return proximo.id;
        }
        return maior
    }, 0)
    return ++id
}


/* 
function cadastrarDev(eventoSubmit){
    eventoSubmit.preventDefault()

    const form = document.querySelector('#formularioCadastro')

    const tecnologias = []
    
    // == FOR RAIZ ==
    // for (let index = 0; index < form.tecnologia.length; index++) {
    //     const inputTecnologia = form.tecnologia[index];
    //     if(inputTecnologia.checked){
    //         tecnologias.push(inputTecnologia.value)
    //     }
    // }

    for (const inputTecnologia of form.tecnologia) {
        if(inputTecnologia.checked){
            tecnologias.push(inputTecnologia.value)
        }
    }

    // form.tecnologia.forEach(function (inputTecnologia) {
    //     if(inputTecnologia.checked){
    //         tecnologias.push(inputTecnologia.value)
    //     }
    // })

    const inputNomeCompleto = document.querySelector('#nomeCompleto')

    const dev = {
        // nome: inputNomeCompleto.value,
        nome: form.nomeCompleto.value,
        dataNascimento: form.dataNascimento.value,
        email: form.email.value,
        whats: form.whats.value,
        endereco: form.enderecoCompleto.value,
        pretensaoSalarial: form.pretSalarial.value,
        areaAtuacao: form.areaAtuacao.value,
        senioridade: form.senioridade.value,
        tecnologias: tecnologias,
        experiencia: form.experiencia.value,
    }

    devs.push(dev)

    console.log(devs)
    
} */

