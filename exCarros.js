/*
1) Crie uma classe para representar carros. 

Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carro {

marca;
cor;
gastoMedioCombustivelKm;

constructor(marca, cor, gastoMedioCombustivelKm){

    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivelKm = gastoMedioCombustivelKm

}

calcularGasto(distanciaEmKm, precoCombustivel) {
    
    return distanciaEmKm * this.gastoMedioCombustivelKm * precoCombustivel;

}

}

const uno = new Carro('Fiat', 'prata', 1/12);
const palio = new Carro ( 'Fiat', 'preto', 1/10);

console.log(uno.calcularGasto(70, 5));
console.log(palio.calcularGasto(70, 5));








