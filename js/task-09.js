const bodyRef = document.querySelector('body')
console.log(bodyRef)
const spanColor = document.querySelector('.color')
console.log(spanColor)
const button = document.querySelector('button.change-color')
console.log(button)
spanColor.textContent ='#ffffff';
button.addEventListener('click', changeColor)

function changeColor(e) {
  e.preventDefault();
  bodyRef.style.backgroundColor = getRandomHexColor()
  spanColor.innerHTML = `${getRandomHexColor()}`;

}
console.log(changeColor)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
