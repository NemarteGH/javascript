
// Disparando eventos com EventListeners. Com o uso de EventListeners, não é necessário utilizar atributos de evento nas tags HTML para disparar ações.
var elemento = window.document.getElementById('quadro')
elemento.addEventListener('click', clique)
elemento.addEventListener('mouseenter', entrou)
elemento.addEventListener('mouseout',saiu)

// Funções 
function clique(){
    window.document.getElementById('quadro').innerText = 'Clicou'
    window.document.getElementById('quadro').style.background = 'green'
}

function entrou(){
    window.document.getElementById('quadro').innerText = 'Entrou'
    window.document.getElementById('quadro').style.background = 'black'
}

function saiu(){
    window.document.getElementById('quadro').innerText = 'Saiu'
    window.document.getElementById('quadro').style.background = 'blue'
}