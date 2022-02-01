document.getElementById('start-play').addEventListener('click', play);

//Funzione che gestisce il gioco
function play(){

    const NUMERO_BOMBE = 16;
    console.log('Avvio del gioco');
    const gioco=document.getElementById('gioco');
    
    //Resetto il campo di gioco
    gioco.innerHTML="";

    const difficolta= document.getElementById('difficolta').value;

    let numeroCelle;
    let cellePerRiga;

    const tentativi=[];
    switch(difficolta){
        case"facile":
        default:
            numeroCelle=100; 
            break

        case"normale":
            numeroCelle=81;
            break

        case"difficile":
            numeroCelle=49;
            break
            
    }

    generaCampoGioco(numeroCelle);
    
    function generaCampoGioco(numeroCelle){

        cellePerRiga=Math.sqrt(numeroCelle);
        
        for( let i =1 ; i<=numeroCelle; i++){
            const nodo= document.createElement('div');
            nodo.classList.add('quadrato');
            
            const dimensione = `calc(100% / ${cellePerRiga})`;
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;
            
            nodo.innerText= i;
            
            nodo.addEventListener('click', handleCellClick);          
            gioco.appendChild(nodo);
        }
        return true;
    }
    function handleCellClick(){
        this.classList.add('clicked');
        this.removeEventListener('click', handleCellClick);

        const cell=parseInt( this.innerText);

        console.log('questa è una cell :' + cell)
    }

    
    
   
    
}


    
    