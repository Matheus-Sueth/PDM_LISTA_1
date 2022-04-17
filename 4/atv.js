/*
4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3- Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.
*/
var readlineSync = require('readline-sync')

var objeto = {
    'somar': (n1, n2) => n1 + n2,
    'subtrair': (n1, n2) => n1 - n2,
    'multiplicar': (n1, n2) => n1 * n2,
    'dividir': (n1, n2) => n1 / n2
}

function digitarValores(){
    var valor1 = parseFloat(readlineSync.question('Digite o primeiro valor: '))
    var valor2 = parseFloat(readlineSync.question('Digite o segundo valor: '))
    return [valor1, valor2]
}

function tentar(){
    console.log("\n\n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n5- Sair")
    var resposta = readlineSync.question()
    if(resposta == '1'){
        var aux = digitarValores()
        console.log(objeto.somar(aux[0],aux[1]))
        return true
    }
    else if(resposta == '2'){
        var aux = digitarValores()
        console.log(objeto.subtrair(aux[0],aux[1]))
        return true
    }   
    else if(resposta == '3'){
        var aux = digitarValores()
        console.log(objeto.multiplicar(aux[0],aux[1]))
        return true
    }
    else if(resposta == '4'){
        var aux = digitarValores()
        console.log(objeto.dividir(aux[0],aux[1]))
        return true
    }
    else if(resposta == '5'){
        console.log('Saindo....')
        return false
    }
    else{
        console.log('Opção inválida, digite novamente.\n')
        return true
    }
}

while(true){
    if(tentar() == false){
        break
    }
}