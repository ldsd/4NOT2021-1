// Criando um objeto cujo valor das propriedades vem 
// de variáveis

let  usuario ='ldsd_silva'
let senha = 'Controle'
let name = 'Leandro'
let lastLogin = '2021-02-09 22:49:28'

let userInfo = {
    login: usuario,
    password: senha,
    name, // Propriedade abreviada (name: name)
    lastLogin 
}

console.log(userInfo)

let info = 'Isto é um teste'
console.log(info)
console.log({info})