const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'João', nota: 9.2, bolsista: false},
    {nome: 'João', nota: 9.8, bolsista: false},
    {nome: 'João', nota: 8.7, bolsista: false}    
]



const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)