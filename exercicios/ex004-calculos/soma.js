function somar(){
            var n1 = Number(window.document.getElementById('input_1').value)
            var n2 = Number(document.getElementById('input_2').value)
            var soma = n1 + n2
            window.document.getElementById('resultado').innerHTML = `O resultado é <strong>${soma}</strong>`
        }