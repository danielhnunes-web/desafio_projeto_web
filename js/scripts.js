// console.log("Teste")

// console.log("Comando de saída")

// //CRIANDO VARIÁVEIS

// let num = 50
// var num2 = 180
// const num3 = 500

// console.log(num)
// console.log(num2)
// console.log(num3)

// if (true){
//     let num4 = 420
//     var num5 = 650

//     console.log(num4)
// }

// console.log(num5)

// num = 2

// console.log(num)

// //CONCATENAÇÃO

// console.log('Valor de num =', num)
// console.log("Valor de num " + num)
// console.log('Valor de num2 ', num2)
// console.log(`Valor de num2 ${num2}`)

// console.log('A soma dos números ' + 15 + 8)
// console.log('A soma dos números ', 15 + 8)
// console.log(`A soma dos números ${15 + 8}`)

// console.log('A soma dos números ' + num + num2)
// console.log('A soma dos números ', num + num2)
// console.log(`A soma dos números ${num3 - num2}`)

// console.log('SOMA DAS VARIÁVEIS ', num + num2)
// console.log('SUBTRAÇÃO DAS VARIÁVEL ', num3 - num)
// console.log('MULTIPLICAÇÃO ', num5 * 2)
// console.log('DIVISÃO DE VALORES ', num2 / 5)
// console.log('RESTO DA DIVISÃO ', num2 % 2)
// console.log(`RESTO DA DIVISÃO ${num3 % 3}`)

// console.log('TESTE DE COMPARAÇÃO', 10 == 2)
// console.log('TESTE RELACIONAIS', 10 != 2)
// console.log('TESTE RELACIONAL', 10 > 2)
// console.log('TESTE RELACIONAL', 10 < 2)
// console.log('TESTE RELACIONAL', 10 >= 2)
// console.log('TESTE RELACIONAL', 10 <= 2)
// console.log('TESTE LÓGICO', (10 > 2) && (15 < 5))
// console.log('TESTE LÓGICO', (10 > 2) || (15 < 5))

// //TESTE LÓGICO

// let idade = 25

// if(idade >= 18){
//     console.log('Maior de idade')
// }
// else{
//     console.log('Menor de idade')
// }

// if (idade < 18){
//     console.log(`COM A IDADE DE ${idade}, NÃO É PERMITIDO POSSUIR CNH`)
// }else if(idade < 50){
//     console.log(`COM A IDADE DE ${idade}, 10 ANOS PARA RENOVAR`)
// }else if(idade < 70){
//     console.log(`COM A IDADE DE ${idade}, 5 ANOS PARA RENOVAR`)
// }else{
//     console.log(`COM A IDADE DE ${idade}, 3 ANOS PARA RENOVAR`)


//ATIVIDADE LÓGICA DE PROGRAMAÇÃO

// QUESTÃO 1

    // let num1 = Number(prompt("qual o primeiro número?"))
    // let num2 = Number(prompt("qual o segundo número?"))
    // let num3 = Number(prompt("qual o terceiro número?"))

    // let media = ((num1 + num2 + num3) / 3);

    // alert(`Sua média é: ${media}` )

//     QUESTÃO 2

// let largura = Number(prompt("Digite a largura da parede em metros:"));
// let altura = Number(prompt("Digite a altura da parede em metros:"));

// let area = largura * altura;

// let tinta = area * 2;

// alert(`Área da parede: " + area + " m²`);
// alert(`Quantidade de tinta necessária: " + tinta + " litros`)

// QUESTÃO 3

// let distancia = Number(prompt('Qual a distância a ser percorrida? '));
// let consumo = Number(prompt('qual o consumo médio do veículo em l/km? '))
// let preço = Number(prompt('Qual o preço do litro do combustivel? '))

// alert(`A quantidade de combustível necessário para percorrer o trajeto é de: ${distancia * preço} Litros.`)
// alert(`O valor total a pagar com combustível para esse deslocamento é de: ${distancia * preço} reais.`)

//QUESTÃO 4

// let nome = prompt("Digite seu nome: ");
// let nota1 = Number(prompt("Digite a primeira nota: "));
// let nota3 = Number(prompt("Digite a segunda nota: "));
// let nota2 = Number(prompt("Digite a terceira nota: "));

// let media = ((nota1 + nota2 + nota3) / 3 )

// if (media >= 6){
//     alert(`${nome}, sua média foi: ${math.round(media)}, você foi aprovado!`)
// } else {
//     alert(`${nome}, sua média foi: ${math.round(media)}, você foi reprovado!`)
// }

//QUESTÃO 5

// alert("Digite as medidas do triângulo: ")

// let med1 = Number(prompt('Primeira medida'));
// let med2 = Number(prompt('Segunda medida'));
// let med3 = Number(prompt('Terceira medida'));

// if ((med1 === med2 && med1 === med3)){
//     alert("Os três lados são iguais, então o triângulo é um Equilátero!")
// }else if (med1 === med2 || med1 === med3 || med2 === med3) {
//     alert("Apenas dois lados são iguais, então o triângulo é um Isóscele!")
// }else {
//     alert("Os três lados são diferentes, então o triângulo é um Escaleno!")
// }

//QUESTÃO 6

// alert("Cálculo de IMC (Indice de massa corporal)")
// let nome = prompt("Digite o nome do paciente:");
// let peso = Number(prompt("Digite o peso em kg:"));
// let altura = Number(prompt("Digite a altura em metros:"));

// let imc = peso / (altura * altura) * 10000;

// let risco;

// if (imc < 20) {
//     risco = "Abaixo do peso";

// } else if (imc >= 20 && imc < 25) {
//     risco = "Normal";

// } else if (imc >= 25 && imc < 30) {
//     risco = "Excesso de peso";

// } else if (imc >= 30 && imc < 35) {
//     risco = "Obesidade";

// } else {
//     risco = "Obesidade mórbida";
// }

// alert(
//     "Paciente: " + nome +
//     "\nIMC: " + imc.toFixed(2) +
//     "\nFaixa de risco: " + risco
// )