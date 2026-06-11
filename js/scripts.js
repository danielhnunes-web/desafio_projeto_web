console.log("Teste")

console.log("Comando de saída")

//CRIANDO VARIÁVEIS

let num = 50
var num2 = 180
const num3 = 500

console.log(num)
console.log(num2)
console.log(num3)

if (true){
    let num4 = 420
    var num5 = 650

    console.log(num4)
}

console.log(num5)

num = 2

console.log(num)

//CONCATENAÇÃO

console.log('Valor de num =', num)
console.log("Valor de num " + num)
console.log('Valor de num2 ', num2)
console.log(`Valor de num2 ${num2}`)

console.log('A soma dos números ' + 15 + 8)
console.log('A soma dos números ', 15 + 8)
console.log(`A soma dos números ${15 + 8}`)

console.log('A soma dos números ' + num + num2)
console.log('A soma dos números ', num + num2)
console.log(`A soma dos números ${num3 - num2}`)

console.log('SOMA DAS VARIÁVEIS ', num + num2)
console.log('SUBTRAÇÃO DAS VARIÁVEL ', num3 - num)
console.log('MULTIPLICAÇÃO ', num5 * 2)
console.log('DIVISÃO DE VALORES ', num2 / 5)
console.log('RESTO DA DIVISÃO ', num2 % 2)
console.log(`RESTO DA DIVISÃO ${num3 % 3}`)

console.log('TESTE DE COMPARAÇÃO', 10 == 2)
console.log('TESTE RELACIONAIS', 10 != 2)
console.log('TESTE RELACIONAL', 10 > 2)
console.log('TESTE RELACIONAL', 10 < 2)
console.log('TESTE RELACIONAL', 10 >= 2)
console.log('TESTE RELACIONAL', 10 <= 2)
console.log('TESTE LÓGICO', (10 > 2) && (15 < 5))
console.log('TESTE LÓGICO', (10 > 2) || (15 < 5))

//TESTE LÓGICO

let idade = 25

if(idade >= 18){
    console.log('Maior de idade')
}
else{
    console.log('Menor de idade')
}

if (idade < 18){
    console.log(`COM A IDADE DE ${idade}, NÃO É PERMITIDO POSSUIR CNH`)
}else if(idade < 50){
    console.log(`COM A IDADE DE ${idade}, 10 ANOS PARA RENOVAR`)
}else if(idade < 70){
    console.log(`COM A IDADE DE ${idade}, 5 ANOS PARA RENOVAR`)
}else{
    console.log(`COM A IDADE DE ${idade}, 3 ANOS PARA RENOVAR`)
}