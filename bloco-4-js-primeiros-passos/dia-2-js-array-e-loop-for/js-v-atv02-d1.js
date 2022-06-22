// estrutura repetição for/of

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

groceryList.push("batata", "cebola");

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

// o of ele itera os numeros dentro do array e apresenta como resultado.
// o of ele não altera os valores de dentro do array

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nameList of names) {
    console.log(nameList);

}



