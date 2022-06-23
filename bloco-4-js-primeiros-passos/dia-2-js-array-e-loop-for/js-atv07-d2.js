// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = number[0];

for (let index = 0; index < number.length; index += 1) {
  if (number[index] < result) {
    result = number[index];
  }
}

console.log(result);
