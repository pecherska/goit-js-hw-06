const element = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
}

element.input.addEventListener('input', (event) => { !event.currentTarget.value ? element.output.textContent = 'Anonymous' : element.output.textContent = event.currentTarget.value })




// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);

// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
// }