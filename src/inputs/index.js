
const textInput = document.getElementById('text-input')
const dateInput = document.getElementById('date-input')
const passwordInput = document.getElementById('password-input')

const paragraph1 = document.getElementById('1')
const paragraph2 = document.getElementById('2')
const paragraph3 = document.getElementById('3')

textInput.addEventListener('input', () => {
    const value = textInput.value
    paragraph1.replaceChildren(value)    
})

dateInput.addEventListener('input', () => {
    const value = dateInput.value
    paragraph2.replaceChildren(value)    
})

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value
    paragraph3.replaceChildren(`A senha do cara é: ${value}`)    
})