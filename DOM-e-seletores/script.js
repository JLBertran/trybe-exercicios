const header = document.querySelector("#header-container");
header.style.backgroundColor ="green";
header.style.color = "white";


const emergency = document.getElementsByClassName("emergency-tasks");
emergency[0].style.backgroundColor = "pink";

const divEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let index =0; index < divEmergency.length; index +=1){
  divEmergency[index].style.backgroundColor = 'purple'
}

const noEmergency = document.getElementsByClassName("no-emergency-tasks");
noEmergency[0].style.backgroundColor = 'yellow';

const divNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < divNoEmergency.length ; index +=1) {
  divNoEmergency[index].style.backgroundColor = 'black'
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor ='black';

