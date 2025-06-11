//getElementsByName esta no plural, então precisa de [0]
//getElementById esta no singular, então não precisa de [0]

// Acessando elemento por tag ou marcação
var ele1 = window.document.getElementsByTagName('div')[0]
ele1.style.background = 'blue'

// Acessando elemento por ID html
var ele2 = document.getElementById('ele2')
ele2.style.background = 'green'
ele2.style.color = '#FFFFFF'

// Acessando elemento por Name html
var ele3 = document.getElementsByName('ele3')[0]
ele3.style.background = 'red'

// Acessando elemento por classe
var ele4 = window.document.getElementsByClassName('ele4')[0]
ele4.style.background = 'brown'

// Acessando elemento por Query Selector
var ele5 = window.document.querySelector('div#ele5')
ele5.style.background = 'orange'