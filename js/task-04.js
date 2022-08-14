const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const counter = {
    value: 0,
    increment() {
        this.value += 1
    },
    decrement() {
        this.value -= 1
    }
}

function addValue(evt) {
    counter.increment()
    counterValue.textContent = counter.value
} 
function minusValue(evt) {
    counter.decrement()
    counterValue.textContent = counter.value
}

decrementBtn.addEventListener('click', minusValue)
incrementBtn.addEventListener('click',addValue)

console.log(counterValue);
// console.log(decrementBtn)
// console.log(incrementBtn)