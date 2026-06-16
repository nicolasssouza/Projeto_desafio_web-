//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let lado1 = parseFloat(objFormDados.get('Lado1'))
    let lado2 = parseFloat(objFormDados.get('Lado2'))
    let lado3 = parseFloat(objFormDados.get('Lado3'))
    
    let tipodetriângulo = ''
    
    if (lado1 == lado2 && lado2 == lado3) {
        tipodetriângulo = "Equilátero: possui os 3 lados iguais.";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipodetriângulo = "Isósceles: possui 2 lados iguais.";
    } else {
        tipodetriângulo = "Escaleno: possui 3 lados diferentes.";
    }
    
    
    divResultado.innerHTML = `Seu triângulo é ${tipodetriângulo}`
    
    
    formDados.reset()
})