
function horas(){
    var atual = new Date()
    var atualh = atual.getHours()

    if (atualh < 12 ){
        window.document.getElementsByTagName('div')[0].innerHTML = '<p>Bom dia!</p>'

        window.document.getElementsByTagName('img')[0].src = 'imagens/manha.jpg'

        window.document.body.style.background = '#E0C58C'
    }

    else if (atualh < 18){
        window.document.getElementsByTagName('div')[0].innerHTML = '<p>Boa tarde!</p>'

        window.document.getElementsByTagName('img')[0].src = 'imagens/tarde.jpg'

        window.document.body.style.background = '#658368'
    } 

    else if(atualh >= 18){
        window.document.getElementsByTagName('div')[0].innerHTML = '<p>Boa noite!</p>'

        window.document.getElementsByTagName('img')[0].src = 'imagens/noite.jpg'

        window.document.body.style.background = '#194C5E'
    }
    
    setInterval(function() {
    document.getElementsByTagName('div')[1].innerHTML = 
        'Agora são <time>' + 
        (new Date().getHours().toString().padStart(2, '0')) + ':' + 
        (new Date().getMinutes().toString().padStart(2, '0')) + ':' + 
        (new Date().getSeconds().toString().padStart(2, '0')) + 
        '</time>';
    }, 1000);

}