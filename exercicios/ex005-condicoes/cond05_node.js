// Executado com Node.js
// Condições aninhadas

var horas = new Date()
console.log(`Agora são exatamente ${horas.getHours()} horas e ${horas.getMinutes()} minutos.`)

if (horas.getHours() > 12 && horas.getHours() < 18){
    console.log('Boa tarde!')
}
else{
    if(horas.getHours() < 12 && horas.getHours() > 6){
        console.log('Bom dia!')
    }

    else{
        console.log('Boa noite!')
    }
}