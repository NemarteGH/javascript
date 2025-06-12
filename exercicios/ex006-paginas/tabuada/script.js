function verificar(){

    // Criação do select
    let selec = document.createElement('select')
    selec.setAttribute('name','tabuada')
    selec.setAttribute('id','seltab')
    selec.setAttribute('size','10')

    // Criação e configuração da imagem
    let imagem = document.createElement('img')
    imagem.setAttribute('src','professor.png')
    imagem.style.transform = 'scaleX(-1)'

    // Definição de variáveis
    let numero = window.document.getElementById('num')
    let divres = window.document.getElementById('resultado')
    divres.innerHTML = ''
   
    // Validação simples
    if (numero.value.length == 0){
        window.alert('Insira um número para iniciar')
    } 

    else if(Number(numero.value) < 0 || Number(numero.value > 1000 )){
        window.alert('Insira um número entre 0 e 1000')
    }
    
    else {

        let n = Number(numero.value)
        divres.appendChild(selec)

        for(var c = 0; c != 10; c++){

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            selec.appendChild(item)

        }

        divres.appendChild(imagem)

    }
}