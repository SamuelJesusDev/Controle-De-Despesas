const nums = [1,2,3,4,5]
// map gera um novo array transformado sendo que tem o mesmo  tamanho so que modificado no caso abaixo o dodro
// map não muda o array atual... ele gera um novo array // 7:18
let resultado = nums.map(function(valor){
    return valor *2
})

console.log(resultado)
/*
function soma10(valor){
    return valor + 10
}*/

const soma10 = valor => valor + 10

let resultado2 = nums.map(soma10)
console.log(resultado2)