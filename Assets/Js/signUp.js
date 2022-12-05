// Steps
const stepTwoOne = document.querySelector('.step2_1'),
    stepTwoTwo = document.querySelector('.step2-2'),
    stepThree = document.querySelector('.step3'),
    stepOne = document.querySelector('.step1');

// Next Buttons
const stepOneBtn = document.querySelector('.signUpOne'),
    stepTwoBtn = document.querySelector('.signUpTwoOne'),
    stepThreeBtn = document.querySelector('.signUpTwoTwo');



stepOneBtn.addEventListener('click', (e) => {
    e.preventDefault()
    stepTwoOne.classList.remove('close');
    stepOne.classList.add('close')
})

stepTwoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    stepTwoTwo.classList.remove('close');
    stepTwoOne.classList.add('close')
})

stepThreeBtn.addEventListener('click', () => {
    stepThree.classList.remove('close');
    stepTwoTwo.classList.add('close')
})