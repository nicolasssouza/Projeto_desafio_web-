//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    let produto = objFormDados.get('produto');
    let preco = Number(objFormDados.get('preco'));
    let lucro =parseFloat('')

    if (preco < 10){
        lucro = preco * 0.7
   
     }else if ((preco > 10) && (preco < 30)){
       lucro = preco * 0.5
   
     }else if ((preco > 30) && (preco < 50)){
        lucro = preco * 0.4
   
     }else if(imc < 50){
        lucro = preco * 0.3
        }
   
      divResultado.innerHTML = `o lucro da compra é ${lucro.toFixed(2).replace('.',',')}`                                

     

    formDados.reset();
    })