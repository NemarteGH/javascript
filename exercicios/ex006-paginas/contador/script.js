function verificar(){

    var inicio = Number(window.document.getElementById('inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var passo = Number(window.document.getElementById('passo').value)

    console.log(Number(inicio),Number(fim),Number(passo))

    if(inicio == 0 || fim == 0){
        window.alert('[ERRO] Preencha os campos para iniciar a contagem!')
    } else{

        if(passo == 0){
        window.alert('[ERRO] Passo [0] não é possível, considerando passo [1].')
        passo = 1
        }

        var res = window.document.getElementById('resultado')

        if (inicio < fim){
            for(inicio; inicio != fim; inicio += passo){
            res.innerHTML += inicio + ' \u{1F449} '
            }
        }

        else if (inicio > fim){
            for(inicio; inicio != fim; inicio -= passo){
            res.innerHTML += inicio + ' \u{1F449} '
            }
        }

        res.innerHTML += '\u{1F6A9}'
    }
}