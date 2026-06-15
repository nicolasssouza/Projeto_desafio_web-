//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distancia = parseFloat(objFormDados.get('Distância'))
    let consumo = parseFloat(objFormDados.get('Consumo'))
    let preço = parseFloat(objFormDados.get('Preço'))
     
    let quantidade = distancia / consumo

    

    divResultado.innerHTML = `A quantidade de combustível necessário é de: ${quantidade.toFixed(2).replace('.',',')}l , O valor total a pagar com combustível para esse
    deslocamento é de: . ${parseFloat(quantidade * preço).toFixed(2).replace('.',',')}R$`

    formDados.reset()
})