let amigo = {
    nome: 'Jose',
    sexo:'M',
    peso:78,
    engordar(p=0){
        console.log('Engordou')
        // This equivale a algo como self em Python (refere se ao objeto amigo e ao atributo peso)
        this.peso += p
    }
}

console.log(typeof amigo) // Mostra o tipo da variável
console.log(amigo.nome)
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)