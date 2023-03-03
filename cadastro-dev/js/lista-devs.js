
/**
 * Java
 * Script
 * Object
 * Notation
*/

// JSON.parse => Converte a string para o valor original

const listaDevs = JSON.parse(localStorage.getItem('listaDevs') ?? '[]')


document.addEventListener('DOMContentLoaded', () =>{
    for (const desenvolvedor of listaDevs) {
        const tbody = document.querySelector('#tbody')
        const tr = document.createElement('tr')
        tr.id = `dev-${desenvolvedor.id}`
        adicionaInformacoesNaLinha(desenvolvedor, tr)
        tbody.appendChild(tr)
    }
})

function adicionaInformacoesNaLinha(desenvolvedor, tr){
    const tdNome = document.createElement('td')
    tdNome.innerText = desenvolvedor.nome
    tr.appendChild(tdNome)

    const tdDtNascimento = document.createElement('td')
    tdDtNascimento.innerText = desenvolvedor.dataNascimento
    tr.appendChild(tdDtNascimento)

    const tdEmail = document.createElement('td')
    tdEmail.innerText = desenvolvedor.email
    tr.appendChild(tdEmail)

    const tdWhats = document.createElement('td')
    tdWhats.innerText = desenvolvedor.whats
    tr.appendChild(tdWhats)

    const tdEndereco = document.createElement('td')
    tdEndereco.innerText = desenvolvedor.endereco
    tr.appendChild(tdEndereco)

    const tdPretSalarial = document.createElement('td')
    tdPretSalarial.innerText = `R$ ${desenvolvedor.pretensaoSalarial}`
    tr.appendChild(tdPretSalarial)

    const tdAreaAtuacao = document.createElement('td')
    tdAreaAtuacao.innerText = `R$ ${desenvolvedor.areaAtuacao}`
    tr.appendChild(tdAreaAtuacao)

    const tdSenioridade = document.createElement('td')
    tdSenioridade.innerText = desenvolvedor.senioridade
    tr.appendChild(tdSenioridade)

    const tdTecnologias = document.createElement('td')
    tdTecnologias.innerText = desenvolvedor.tecnologias
    tr.appendChild(tdTecnologias)

    const tdExperiencia = document.createElement('td')
    tdExperiencia.innerText = desenvolvedor.experiencia
    tr.appendChild(tdExperiencia)

    const btnEditar = document.createElement('button')
    btnEditar.innerText = 'Editar'
    btnEditar.onclick = () => editarDev(desenvolvedor.id)

    const btnExcluir = document.createElement('button')
    btnExcluir.innerText = 'Excluir'
    btnExcluir.onclick = () => removerDev(desenvolvedor.id)

    const tdAcoes = document.createElement('td')
    tdAcoes.appendChild(btnEditar)
    tdAcoes.appendChild(btnExcluir)
    tr.appendChild(tdAcoes)
}

function editarDev(idDev) {
    const indiceDev = listaDevs.findIndex((dev) => dev.id === idDev)

    if(indiceDev === -1){
        alert('Não foi encontrado o desenvolvedor que você quer excluir')
        return
    }

    const novoNome = prompt('Nome: ', listaDevs[indiceDev].nome)
    const novaPretSalarial = Number(prompt('Pretenção salarial: R$', listaDevs[indiceDev].pretensaoSalarial))

    listaDevs[indiceDev].nome = novoNome
    listaDevs[indiceDev].pretensaoSalarial = novaPretSalarial

    localStorage.setItem('listaDevs', JSON.stringify(listaDevs))

    const trDevEdicao = document.querySelector(`#dev-${idDev}`)
    trDevEdicao.innerHTML = ''

    adicionaInformacoesNaLinha(listaDevs[indiceDev], trDevEdicao)
}

function removerDev(idDev) {
    const indiceDev = listaDevs.findIndex((dev) => dev.id === idDev)

    if(indiceDev === -1){
        alert('Não foi encontrado o desenvolvedor que você quer excluir')
        return
    }

    listaDevs.splice(indiceDev, 1)

    localStorage.setItem('listaDevs', JSON.stringify(listaDevs))

    const trDev = document.querySelector(`#dev-${idDev}`)
    trDev.remove()
}

