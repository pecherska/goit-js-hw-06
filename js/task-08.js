const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Помилка! Всі поля форми необхідно заповнити.');
        return;   
    }

    const formData = {
        email,
        password,
    }
    console.log(formData);

    event.currentTarget.reset();
}
