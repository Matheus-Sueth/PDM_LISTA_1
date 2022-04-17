/*
1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.
*/
function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){   
    return n1 / n2
}

var a = [10,5]
console.log(somar(a[0],a[1]))
console.log(subtrair(a[0],a[1]))
console.log(multiplicar(a[0],a[1]))
console.log(dividir(a[0],a[1]))