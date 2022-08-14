const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul')
console.log(ingredientsList)
const makeIngredinestEl = ingredients.map(ingredients => {
  const makeItem = document.createElement('li');
  makeItem.textContent = ingredients
  makeItem.classList.add('item');
  return makeItem
})
console.log(makeIngredinestEl)
ingredientsList.append(...makeIngredinestEl);
