let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('email');
let error = document.querySelector('.error');
let logoError = document.getElementById('logoError');
const regex = RegExp('/^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,})$/');
let input = document.getElementById('email').parentElement.querySelector(':invalid')

console.log(input.parentElement.querySelector(':invalid')
)
email.addEventListener("input", function (event) {
    console.log(event.target.value)
    let isMatched = regex.test(event.target.value)
    console.log(isMatched)
    if (isMatched) {
        error.innerHTML = "";
        error.className = "error";
    }
    else if (!isMatched) {
        error.innerHTML = "";
    }
}, false);

form.addEventListener("submit", function (event) {
    console.log(email.value)
    if (!email.validity.valid) {
        logoError.style.visibility = 'visible';
        input.style.visibility = 'visible';
        error.innerHTML = "Please provide a valid email";
        error.className = "error active";
        event.preventDefault();
    }
    else {
        logoError.style.visibility = 'hidden';
        input.style.visibility = 'visible';

    }

}, false);

