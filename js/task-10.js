const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');


btnCreate.addEventListener('click', createDivEl);
btnDestroy.addEventListener('click', destroyDivEl);

function createDivEl() {
  const amount = inputEl.value;

  for (let i = 0; i < amount; i++){
    const createDiv = document.createElement("div");

    const value = (30 + i * 10);
    createDiv.style.width = `${value}px`;
    createDiv.style.height = `${value}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.marginTop = "10px";
    createDiv.style.marginBottom = "10px";

    boxesEl.appendChild(createDiv);
  }
}

function destroyDivEl() {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
  
  inputEl.value = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
