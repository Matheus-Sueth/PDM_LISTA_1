/*
6. Refaça o exercício 5 usando a construção async/await.
*/
var readlineSync = require('readline-sync')
require('dotenv/config')
const axios = require('axios')
const key = '51410ffd175ad68b9d6e9eac4401e635'

async function getUser(url) {
    try {
        const response = await axios.get(url)
        return response
    } 
    catch (error) {
        return error
    }
  }

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
        var resposta = getUser(url)
        resposta.then(function (resposta){
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