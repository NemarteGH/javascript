function funcao() {
    var velocidade = window.document.getElementsByTagName('input')[0].value
    var div = window.document.getElementById('resultado')

    if (velocidade > 60){
        div.style.display = 'block'
        div.innerHTML = '<strong>Multado</strong> por exesso de velocidade!'
    }

    else{
        div.style.display = 'block'
        div.innerHTML = 'Use sempre o cinto de segurança.'
    }
}