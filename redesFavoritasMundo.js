async function redesFavoritasMundo() {
    const url = 'https://raw. githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const redes = Object.keys(dados)
    const valores = Object.values(dados)
    }
    
    redesFavoritasMundo()