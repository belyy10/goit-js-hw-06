const categoriesEl = document.querySelector('ul#categories')
console.log(`Number of categories:${categoriesEl.children.length}`);

const itemsCategoires = document.querySelectorAll('li.item')
itemsCategoires.forEach(items =>
{ console.log(`Category:${items.querySelector('h2').textContent}`); console.log(`Elements:${items.querySelectorAll('li').length}`);})
