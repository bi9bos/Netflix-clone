const dropBtn = document.querySelectorAll('.question span')
const answr = document.querySelectorAll('.answer')

dropBtn.forEach((btn, i) => {
    answr.forEach((answer, j) => {
        btn.addEventListener('click', () => {
            if (i==j) {
                answer.classList.toggle('show')
            }
            else {
                answer.classList.remove('show')
            }
        })
    })
})