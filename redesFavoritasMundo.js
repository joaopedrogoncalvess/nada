import {getCSS, criarGrafico} from "./common.js"    
async function redesFavoritasMundo() {
    const url = 'https://raw. githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const redes = Object.keys(dados)
    const valores = Object.values(dados)
    }
    
    redesFavoritasMundo()
    const data = [
        {
        
        values: valores,
        labels: redes,
        type: 'pie',
        textinfo: 'label+percent'
        
        }
        ]
        import {getCSS} from "./common.js"
        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            height: 700,
            title: {
                text: 'Redes sociais com mais usuários no mundo',
                x: 0,
                font: {
                    color: getCSS('--primary-color'),
                    family: getCSS('--font'),
                    size: 30
                }
            },
            legend: {
                font: {
                color: getCSS('--primary-color'),
                size: 16
                }
                },
            xaxis: {  
                tickfont: tickConfig
                ,
                
                title: {
                    text: 'nome das redes sociais',
                    font: {
                    color: getCSS('--secundary-color')
                    }
                }
            },
                yaxis: {
                    tickfont: tickConfig,
                    title: {
                    text: 'bilhões de usuários ativos',
                    font: {
                    color: getCSS('--secundary-color')
                }
                }
                }
                
        }
       function criarGrafico(data, layout){
        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container')
        .appendChild(grafico)
        const config = {
            responsive: true,
            displayModeBar: false
            }
        Plotly.newPlot(grafico, data, layout, config)
    }
    
    export {getCSS, tickConfig, criarGrafico}