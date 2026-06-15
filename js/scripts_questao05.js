//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nome = objFormDados.get('Nome')
    let nota1 = parseFloat(objFormDados.get('Nota1'))
    let nota2 = parseFloat(objFormDados.get('Nota2'))
    let nota3 = parseFloat(objFormDados.get('Nota3'))
    
    let media = (nota1 + nota2 + nota3) /3
    
    let situacaoaprovacao = ''
    
    if (media >= 6){
        situacaoaprovacao = `Aprovado`
    }else{
        situacaoaprovacao = `Reprovado`
    }

    divResultado.innerHTML = `${nome}, sua media é ${media.toFixed(2)}, ${situacaoaprovacao}`
    
    
     
    
    formDados.reset()
})