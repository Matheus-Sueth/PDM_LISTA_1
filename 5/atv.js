/*
5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula.
https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
1- Digitar latitude e longitude
2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.
*/
var readlineSync = require('readline-sync')
require('dotenv/config')
const axios = require('axios')
const key = '51410ffd175ad68b9d6e9eac4401e635'

function digitarValores(){
    var valor1 = readlineSync.question('Digite a latitude: ')
    var valor2 = readlineSync.question('Digite a longitude: ')
    return [valor1, valor2]
}

function tentar(){
    console.log("\n\n1- Digitar latitude e longitude\n2- Sair")
    var resposta = readlineSync.question()
    if(resposta == '1'){
        var aux = digitarValores()
        var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+aux[0]+'&lon='+aux[1]+'&appid='+process.env.SECRET_API+process.env.KELVIN
        axios.get(url)
        .then(function (resposta){
            console.log('Latitude digitada =',aux[0],'e longitude digitada =',aux[1])
            console.log('A temperatura é',resposta['data']['main']['temp'], 'em',resposta['data']['sys']['country'])
        })
        .catch(function (erro){
            console.log(erro)
        })
        return true
    }
    else if(resposta == '2'){
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