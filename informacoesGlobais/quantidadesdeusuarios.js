async function quantidadeUsuarios() {
    const url =  'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json' 

const res = await fetch(url)
const dados = await res.json()

console.log(dados)
const nomeDasRedes = Object.values(dados)
const quantidadeUsuarios = Object.values(Dados)

const data = [
    {
        x: nomeDasRedes,
        y: quantidadeUsuarios,
        type: 'bar'
    }
]

const grafico = document.createElement('div')
grafico.className= 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPLot(grafico,data)

}
quantidadeUsuarios()
