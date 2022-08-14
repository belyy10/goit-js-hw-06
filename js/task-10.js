function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
console.log(inputRef);
const createBtn = document.querySelectorAll('[data-create]');
console.log(createBtn);
const clearBtn = document.querySelectorAll('[data-destroy]');
console.log(clearBtn);
const boxes = document.querySelector("#boxes");
console.log(boxes);
