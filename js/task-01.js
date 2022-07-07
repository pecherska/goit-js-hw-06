const list = document.querySelectorAll('li.item');

console.log(`Numbers of categories: ${list.length} `);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
  );
});