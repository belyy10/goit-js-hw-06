const input = document.querySelector('input[data-length="6"]')
const mainInput = document.querySelector('input')
input.addEventListener('blur', onInputBlur)
function onInputBlur(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        mainInput.classList.remove('invalid');
        mainInput.classList.add('valid');
 
    }
    else {
        mainInput.classList.remove('valid');
        mainInput.classList.add('invalid');
    };
}
