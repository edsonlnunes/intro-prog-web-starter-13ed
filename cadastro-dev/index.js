// const inputEmail = document.querySelector('#email')
// console.log(inputEmail.value)

const growdevers = []

function cadastrarDev(eventoSubmit){
    eventoSubmit.preventDefault()

    const form = document.querySelector('#formularioCadastro')

    const tecnologias = []
    
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

    const growdever = {
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

    growdevers.push(growdever)
    
}