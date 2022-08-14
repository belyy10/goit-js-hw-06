const form = document.querySelector('.login-form')
console.log(form)

form.addEventListener('submit', onFormSumbit)

function onFormSumbit(e) {
    e.preventDefault()
    const formElement = e.currentTarget.elements;
    const mail = formElement.email.value;
    const password = formElement.email.value;
    const formData = {
        mail,
        password
    };
    if (mail.value === '' || password === '') {
        return alert('Please, fill in all the fields');
    }
    console.log(formData)
    e.currentTarget.reset();
}

