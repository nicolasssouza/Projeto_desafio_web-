//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let codigo = objFormDados.get('codigo');
    let senha = objFormDados.get('senha');
    
    if (codigo === 'ABCD1234' && senha === '1234') {
        divResultado.innerHTML = 'ACESSO PERMITIDO';
    } else {
        divResultado.innerHTML = 'ACESSO NEGADO';
    }
  console.log(numero);
  

 divResultado.innerHTML = numero
   
  
   formDados.reset()
   
  })