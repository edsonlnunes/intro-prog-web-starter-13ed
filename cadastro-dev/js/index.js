// const inputEmail = document.querySelector('#email')
// console.log(inputEmail.value)

const devs = JSON.parse(localStorage.getItem('listaDevs') ?? '[]')

const form = document.querySelector('#formularioCadastro')

form.addEventListener('submit', (eventoSubmit) => {
    eventoSubmit.preventDefault()

    // validar se já existe algum dev com o email informado
    const devJaExiste = devs.some((dev) => dev.email === form.email.value)

    if(devJaExiste){
        alert('Já existe um desenvolvedor cadastrado com este e-mail')
        return
    }

    const tecnologias = []

    for (const inputTecnologia of form.tecnologia) {
        if(inputTecnologia.checked){
            tecnologias.push(inputTecnologia.value)
        }
    }

    const novoDev = {
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

    devs.push(novoDev)

    // JSON.stringfy => Converter qualquer valor (number, object...) para string
    localStorage.setItem('listaDevs', JSON.stringify(devs))
    localStorage.setItem('ultimoID', novoDev.id)
})


function navegarParaLista(){
    location.href = 'lista-devs.html'
}

function proximoId(){
    let ultimoID = Number(localStorage.getItem('ultimoID') ?? '0')
    return ++ultimoID;
}

/* function cadastrarDev(eventoSubmit){
    eventoSubmit.preventDefault()

    const form = document.querySelector('#formularioCadastro')

    // validar se já existe algum dev com o email informado

    // const devJaExiste = devs.some(function (dev) {
    //     return dev.email === form.email.value
    // })

    const devJaExiste = devs.some((dev) => dev.email === form.email.value)

    if(devJaExiste){
        alert('Já existe um desenvolvedor cadastrado com este e-mail')
        return
    }

    const tecnologias = []

    for (const inputTecnologia of form.tecnologia) {
        if(inputTecnologia.checked){
            tecnologias.push(inputTecnologia.value)
        }
    }

    const novoDev = {
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

    devs.push(novoDev)

    // JSON.stringfy => Converter qualquer valor (number, object...) para string
    localStorage.setItem('listaDevs', JSON.stringify(devs))
    localStorage.setItem('ultimoID', novoDev.id)
} */

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

