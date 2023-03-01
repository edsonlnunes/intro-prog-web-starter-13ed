
/**
 * Java
 * Script
 * Object
 * Notation
*/

// JSON.parse => Converte a string para o valor original

const listaDevs = JSON.parse(localStorage.getItem('listaDevs') ?? '[]')

const tbody = document.querySelector('#tbody')

for (const desenvolvedor of listaDevs) {
    const tr = document.createElement('tr')

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

    tbody.appendChild(tr)
}