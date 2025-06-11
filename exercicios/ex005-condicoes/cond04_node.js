// Executado com Node.js
// Condições aninhadas

var idade = 22
if (idade < 16){
    console.log('Não pode votar')
}
else{
    if (idade >= 16 && idade < 18 || idade >= 65){
        console.log('Voto opcional')
    }
    else{
        console.log('Voto Obrigatório')
    }
}