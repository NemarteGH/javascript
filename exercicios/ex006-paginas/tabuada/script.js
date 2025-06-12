function verificar(){

    // Definição de variáveis
    let numero = window.document.getElementById('num')
    let tab = window.document.getElementById('seltab')
    let divres = window.document.getElementById('resultado2')

    // Criação e configuração da imagem
    let imagem = document.createElement('img')
    imagem.setAttribute('src','professor.png')
    imagem.style.width = '250px'
    imagem.style.transform = 'scaleX(-1)'
    imagem.style.paddingRight = '45px'

    // Validação simples
    if (numero.value.length == 0){
        window.alert('Insira um número para iniciar')
    } 

    else if(Number(numero.value) < 0 || Number(numero.value > 1000 )){
        window.alert('Insira um número entre 0 e 1000')
    }
    
    else {
        tab.innerHTML = '' // Limpa o select
        divres.innerHTML = ''

        let n = Number(numero.value)
        
        window.document.getElementById('seltab').style.
        display = 'inline-block'

        for(var c = 0; c != 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }

        imagem.style.display = 'inline-block'
        divres.appendChild(imagem)
    }
}