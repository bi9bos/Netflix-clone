const email = document.querySelector(".emailInput")
const pwd = document.querySelector(".pwdInput")
const emailLabel = document.querySelector('p.mail')
const pwdLabel = document.querySelector('p.pwd')

email.addEventListener('click', () => {
    emailLabel.classList.add('checked')
    console.log(emailLabel.classList);
})

pwd.addEventListener('click', () => {
    pwdLabel.classList.add('clicked')
})

document.addEventListener('click', () => {
    emailLabel.classList.remove('clicked')
    pwdLabel.classList.remove('clicked')
})

