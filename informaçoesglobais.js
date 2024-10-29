const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
console.log(url);
async function
visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas)* 100)
    const porcentagemConectada = ((pessoasConectadas /pessoasNoMundo) * 100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem
    ${dados.total_pessoas_mundo} de pessoas e
    que aproximadamente ${dados.total_pessoas_conectadas}
    estão conectadas em alguma rede social e passam em média
    ${dados.tempo_medio} horas conectadas.`

    const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
        paragrafo.innerHTML = `Você sabia que o mundo tem
        <span>${dados.total_pessoas_mundo}bilhões</span> de pessoas e
        que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede
        social e passam em media<span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.
        <br> Isso significa que aproximadamente ${porcentagemConectada}%de pessoas estão conectadas em alguma rede social.`

}   

