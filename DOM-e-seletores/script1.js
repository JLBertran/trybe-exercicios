function exercicio1() {
  let txtTagP = document.getElementsByTagName("p");
  txtTagP[1].innerText = "trabalhando como programador";
}
exercicio1();

function exercicio2() {
  let mainContent = document.querySelector("main");
  mainContent.style.backgroundColor = "rgb(76, 164, 109)";
}
exercicio2();

function exercicio3() {
  let center = document.getElementsByClassName("center-content")[0];
  center.style.backgroundColor = "white";
}
exercicio3();

function exercicio4() {
  let title = document.querySelector("h1");
  title.innerText = "Exercício 5.1 - JavaScript";
}
exercicio4();

function exercicio5() {
  let txtUpper = document.getElementsByTagName("p")[0];
  txtUpper.innerHTML = txtUpper.innerHTML.toUpperCase();
}
exercicio5();

function exercicio6() {
  let exibaP = document.getElementsByTagName("p");
  for (let index in exibaP) console.log(exibaP[index].innerHTML);
}

exercicio6();
