var arr = []
var res = document.getElementById('resultado')

function adicionar(){
    
    var num = document.getElementById('num').value
    var lista = document.getElementById('lista')
    var item = document.createElement('option')

    if (num.length == 0){
        window.alert('Adicione valores para começar')
    }

    else if (num < 0 || num >100){
        window.alert('Número inválido')
    }

    else if (arr.indexOf(Number(num)) != -1){
        window.alert('O número já esta presente na lista')
    }

    else{
        arr.push(Number(num))
        res.innerHTML = ''


        for (let pos in arr){
            item.text = arr[pos]
            lista.appendChild(item)
        }
    }

}

function verificar(){

    if ( arr.length == 0){
        window.alert('Insira dados antes de verificar')
    }

    else{
        let soma = 0

        for (let n in arr){
            soma += arr[n]
        }

        res.innerHTML = `A soma dos valores é ${soma} <br> Existem ${arr.length} Itens na lista <br> O menor valor informado foi ${Math.min(...arr)} <br> O maior valor informado foi ${Math.max(...arr)} <br> A média dos valores é ${soma / arr.length}`
    }
}