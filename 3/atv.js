/*
3. Crie um objeto JSON que abriga todas as operações do exercício 2.
*/
var objeto = {
    'somar': (n1, n2) => n1 + n2,
    'subtrair': (n1, n2) => n1 - n2,
    'multiplicar': (n1, n2) => n1 * n2,
    'dividir': (n1, n2) => n1 / n2
}

var a = [10,5]
console.log(objeto.somar(a[0],a[1]))
console.log(objeto.subtrair(a[0],a[1]))
console.log(objeto.multiplicar(a[0],a[1]))
console.log(objeto.dividir(a[0],a[1]))