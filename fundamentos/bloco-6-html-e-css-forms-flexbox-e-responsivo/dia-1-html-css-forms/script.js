const buttonForm = document.querySelector("#buttonForm");


function handleSubmit(event) {
    event.preventDefault();
  }

function clearAll() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}

window.onload = function () {
  const buttonLimpar = document.querySelector("#buttonLimpar");
  buttonLimpar.addEventListener("click", clearAll);
  const buttonEnviar = document.querySelector("#buttonEnviar");
  buttonEnviar.addEventListener('click', handleSubmit)
};
