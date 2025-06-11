function verificar(){
    // Pegando ano atual
    var data = new Date()
    var anoatual = data.getFullYear()

    // Pegando dados do ano de nascimento e do frame onde resultado será exibido no final.
    var nasc = document.getElementById('nascimento')
    var frameresultado = document.getElementById('resultado')

    // Validando dados
    if(nasc.value.length == 0 || Number(nasc.value) > anoatual){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }

    // Caso os dados sejam validos o seguinte acontece
    else{

        // Criando variaveis e pegando dados de sexo
        var sexo = document.getElementsByName('radsex')
        var idade = anoatual - Number(nasc.value)
        var genero = ''

        // Criando e configurando novo elemento de imagem dinâmica
        // Isso tem um efeito parecido com a criação de elemento em HTML
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        imagem.style.borderRadius = '50%'
        imagem.style.width = '200px'
        imagem.style.height = '200px'
        imagem.style.objectFit = 'cover'

        // Estrutura condicional de cada genero e suas imagens correspondentes
        if(sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 5){
                //bebe
                imagem.setAttribute('src', 'imagens/bbm.jpg')
            }
            else if (idade >= 6 && idade <= 14){
                //Criança
                imagem.setAttribute('src', 'imagens/garoto.jpg')
            }
            else if (idade >=15 && idade <=23 ){
                //jovem
                imagem.setAttribute('src', 'imagens/moco.jpg')
            }

            else if (idade >=24 && idade <= 59){
                //homem
                imagem.setAttribute('src', 'imagens/homem.jpg')
            }

            else if (idade >= 60){
                //idoso
                imagem.setAttribute('src', 'imagens/velho.jpg')
            }
                
        }
        else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 1 && idade <= 5){
                //bebe
                imagem.setAttribute('src', 'imagens/bbf.jpg')
            }
            else if (idade >= 6 && idade <= 14){
                //Criança
                imagem.setAttribute('src', 'imagens/garota.jpg')
            }
            else if (idade >=15 && idade <=23 ){
                //jovem
                imagem.setAttribute('src', 'imagens/moca.jpg')
            }

            else if (idade >=24 && idade <= 59){
                //mulher
                imagem.setAttribute('src', 'imagens/mulher.jpg')
            }

            else if (idade >= 60){
                //idoso
                imagem.setAttribute('src', 'imagens/velha.jpg')
            }
        }

        // Mostrando resultados
        frameresultado.style.textAlign = 'center'
        frameresultado.innerHTML = `<p>Detectamos ${genero} de ${idade} anos</p>`
        frameresultado.appendChild(imagem)

    }
}