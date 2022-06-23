// Utilizando o array criado no exercício anterior imprima 
// o resultado da divisão de cada um dos elementos por 2.

let resultado = [];
let resDivisao = [];
let divisor = 2;

for (contador = 1; contador <= 25; contador += 1) {
  resultado.push(contador);
}

for (index = 0; index < resultado.length; index += 1) {
  resDivisao.push(resultado[index] / divisor);

}

for (indexD = 0; indexD < resDivisao.length; indexD +=1) {
  console.log(resDivisao[indexD]);
}
