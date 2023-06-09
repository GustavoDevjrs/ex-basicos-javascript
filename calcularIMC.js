/*
2) O IMC - Indice de Massa Corporal é um critério de Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5   Abaixo do peso;
- Entre 18.5 e 25  Peso normal;
- Entre 25 e 30    Acima do peso;
- Entre 30 e 40    Obeso;
- Acima de 40      Obessidade Grave;
 */

const pesoAdulto = 95;
const alturaAdulto = 1.70;
const IMC = pesoAdulto / Math.pow(alturaAdulto,2);

console.log('O IMC é de:',IMC.toFixed(2));


if (IMC < 18.5) {
    console.log('Abaixo do peso')
}
else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Peso normal')
}
else if (IMC >= 25 && IMC <= 30) {
    console.log('Acima do Peso')
}
else if (IMC >= 30 && IMC <= 40) {
    console.log('Obeso')
}
else if (IMC >= 40) {
    console.log('Obessidade Grave')
}

