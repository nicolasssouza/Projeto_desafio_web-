//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

 
    let numero = parseFloat(objFormDados.get('numero'))
   
    if (numero % 3 === 0 && numero % 7 === 0) {
      numero = "É divisível por 3 e por 7";
  } else {
      numero = "Não é divisível por 3 e por 7";
  }
  
  console.log(numero);
  

 divResultado.innerHTML = numero
   
  
   formDados.reset()
   
  })