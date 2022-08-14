const inputRef = document.querySelector('input#name-input')
const outputRef = document.querySelector('span#name-output')
console.log(inputRef)
console.log(outputRef)

function changeInput(event) {
    if (inputRef.value === '') {
        return outputRef.textContent = "Anonymous"
    } else outputRef.textContent = event.currentTarget.value
}


inputRef.addEventListener('input',changeInput)