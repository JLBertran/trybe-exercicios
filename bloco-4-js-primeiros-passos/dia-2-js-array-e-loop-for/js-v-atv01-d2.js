
let taskList = ['tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(taskList.length);


let searchForFirstTask = taskList [0];
console.log(searchForFirstTask);

let searchForLastTask = taskList[taskList.length -1];
console.log(searchForLastTask);

taskList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(taskList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

taskList.pop();  // remove a última tarefa
console.log(taskList);

// [ 'Tomar café', 'Reunião' ]

let indexOfTask = taskList.indexOf('Reunião');
console.log(indexOfTask);

// Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1] ;

console.log(menuServices);

// Procure o índice do valor "Portfólio" do array menu:

let indexOfPortfolio = menu [2] ;

console.log(indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu:

menu.push('Contato');
console.log(menu);


