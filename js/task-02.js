const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
const list = ingredients => {
  return ingredients.map(ingredient => {
    const list = document.createElement('li');
    list.classList.add('item');
    list.textContent = ingredient;
    return list;
  });
}
const elements = list(ingredients);
ulEl.append(...elements);

// const element =

//   ingredients.forEach(ingredient => {
//   let items = document.createElement('li');
//   items.innerHTML = ingredient;
//   list.append(items);

// })  



// const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;