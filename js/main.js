


const controles = document.querySelectorAll('.controle-ajuste');
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pacotedepoder = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controles.forEach ((elemento)=>{

      elemento.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);

      });
});







function manipulaDados(operacao, controle){

    const pecas = controle.querySelector('.controle-contador');
    

    if(operacao==="-"){   
        if(pecas.value==="00" || pecas.value==="0"){
            pecas.value="00";
        }else{

        pecas.value = parseInt(pecas.value) -1;

     }
    }

     if(operacao==="+"){


        pecas.value = parseInt(pecas.value) +1;

         }
        

}

function atualizaEstatistica(peca){

    estatisticas.forEach((elemento)=>{
       
    elemento.textContent = parseInt(elemento.textContent) + pacotedepoder[peca][elemento.dataset.estatistica];

    })

    

}