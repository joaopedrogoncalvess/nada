
const getCSS = (variavel) => {return getComputedStyle(document.body).getPropertyValue(variavel)
    }
    const tickConfig = {
        color: getCSS('--primary-color'),
        size: 16,
        family: getCSS('--font')
        }
    
export {getCSS, tickConfig,criarGrafico,incluirTexto} 

function incluirTexto (texto) {
    const container = document.getElementById
    ('graficos-container');
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('   graficos-container__texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)

}
criarGrafico(data, layout)
incluirTexto(`Embora o <span>Instagram</span> ocupea quarta posição de redes sociais com mais usuáriosno mundo, ela é a rede social de que as pessoas maisgostam, seguida pelo WhatsApp e pelo Facebook. `)