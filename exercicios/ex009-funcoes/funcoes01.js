// Executado com Node.js
// Funções podem ser chamadas ou acionadas por eventos.

// Definindo função com parâmetro
function parimp(numero){ 
    if(numero%2==0){
        return '[PAR]'
    }
    else{
        return '[IMPAR]'
    }
}

// Passando argumento para função
console.log(parimp(9)) 