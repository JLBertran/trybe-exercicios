
//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// jeito que eu fiz para encontrar os numeros impares

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let even = [];
let odd = [];

for (let index = 0; index < numbers.length; index +=1) {
    numbers[index] % 2 == 0;
    if (numbers[index] % 2 == 0 === true){
        even.push(true);
    } else if (numbers[index] % 2 == 0 === false) {
        odd.push(false);
    } else {
        console.log("nenhum valor ímpar encontrado");

    }

    }
    console.log(even.length, "numeros pares");
    console.log(odd.length, "numeros impares");
    

// jeito certo de acordo com o gabarito da trybe 


let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < number.length; i +=1 ){
    if (number[i] % 2 !== 0) {
        result +=1;
    }
}

if (result === 0) {
    console.log("nenhum valor ímpar encontrado");
}else {
    console.log(result);
}
