// estrutura repetição for/of

let cars = ["Saab", "Volvo", "BMW"];

for (let inde = 0; inde < cars.length; inde += 1) {
  console.log(cars[inde]);
}

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

groceryList.push("batata", "cebola");

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

// o of ele itera os numeros dentro do array e apresenta como resultado.
// o of ele não altera os valores de dentro do array

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}

let word = "Hello";
for (let letter of word) {
  console.log(letter);
}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ["João", "Maria", "Antônio", "Margarida"];

for (let nameList of names) {
  console.log(nameList);
}

for (let index = 0; index < 10; index += 1) {
  console.log(index);
}

for (let indes = 5; indes < 15; indes += 1) {
  console.log("Oie");
}


let counter = 0;

while(counter !== 5) {
  counter += 1;
  console.log(counter)
}


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
    console.log(d2);
}
