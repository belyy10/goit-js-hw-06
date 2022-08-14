const inputRef = document.querySelector('input#font-size-control')
const spanRef = document.querySelector('#text')
console.log(inputRef)
console.log(spanRef)
inputRef.addEventListener('input', inputChange);
function inputChange() {
    spanRef.style.fontSize = `${inputRef.value}px`
}