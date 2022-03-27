const firstName = document.querySelector('#name')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const password = document.querySelector('#password')
const pwdRepeat = document.querySelector('#pwdRepeat')
const submit = document.querySelector('#submit')
const message = document.getElementById('message')

function validate() {
    if(firstName.value === ""){
        message.style.display = 'block'
        message.innerHTML = `Name cannot be empty!`
        firstName.style.boxShadow = '0 0 5px 1.5px red'
        return false
    }

    if (surname.value === "") {
        message.innerHTML = `Surname cannot be empty!`
        message.style.display = 'block'
        surname.style.boxShadow = '0 0 5px 1.5px red'
        return false
    }

    let atPosn = email.value.indexOf('@')
    let dotPosn = email.value.lastIndexOf('.')
    if (atPosn < 1 || (dotPosn - atPosn < 2) || email.value === "") {
        message.innerHTML = `Plese enter a valid e-mail`
        message.style.display = 'block'
        email.style.boxShadow = '0 0 5px 1.5px red'
        return false
    }

    if (tel.value === "" || tel.value.length != 11 || isNaN(tel.value)) {
        message.innerHTML = `Please enter a valid telefon number!`
        message.style.display = 'block'
        tel.style.boxShadow = '0 0 5px 1.5px red'
        return false
    }

    if (password.value.length <= 8) {
        message.innerHTML = `Your password must contain at least 8 characters!`
        message.style.display = 'block'
        password.style.boxShadow = '0 0 5px 1.5px red'
        return false
    }

    if (pwdRepeat.value !== 'password.value') {
        message.innerHTML = `Oops! You've made a mistake!`
        message.style.display = 'block'
        pwdRepeat.style.boxShadow = '0 0 5px 1.5px red'
        return false
    }
}
submit.addEventListener("click", validate)
