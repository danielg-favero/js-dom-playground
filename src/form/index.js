const form = document.getElementById('form')

const handleSubmit = (e) => {
    e.preventDefault()

    const user = document.forms['user-form']['user'].value
    const password = document.forms['user-form']['password'].value

    let userIsValid = false;
    let passwordIsValid = false;

    let wrongUserMessage = ''
    let wrongPasswordMessage = ''
    
    if(user === ''){
        wrongUserMessage = 'Email é obrigatório'
        document.getElementById('user-error-message').innerHTML = wrongUserMessage
        document.getElementById('user-input').classList.add('error-input')
    } else {
        document.getElementById('user-input').classList.remove('error-input')
        document.getElementById('user-error-message').innerHTML = ''
        userIsValid = true
    }
    
    if(user !== 'occamengenharia@gmail.com'){
        wrongUserMessage = 'Email informado é incorreto'
        document.getElementById('user-error-message').innerHTML = wrongUserMessage
        document.getElementById('user-input').classList.add('error-input')
    } else {
        document.getElementById('user-input').classList.remove('error-input')
        document.getElementById('user-error-message').innerHTML = ''
        userIsValid = true
    }
    
    if(password === ''){
        wrongPasswordMessage = 'Senha é obrigatória'
        document.getElementById('password-error-message').innerHTML = wrongPasswordMessage
        document.getElementById('password-input').classList.add('error-input')
    } else {
        document.getElementById('password-input').classList.remove('error-input')
        document.getElementById('password-error-message').innerHTML = ''
        passwordIsValid = true
    }

    if(password !== '123456'){
        wrongPasswordMessage = 'Senha informada é incorreta'
        document.getElementById('password-error-message').innerHTML = wrongPasswordMessage
        document.getElementById('password-input').classList.add('error-input')
    } else {
        document.getElementById('password-input').classList.remove('error-input')
        document.getElementById('password-error-message').innerHTML = ''
        passwordIsValid = true
    }

    if(userIsValid && passwordIsValid) {
        alert(`Usuário: ${user}\n Senha: ${password}`)
    }
}

form.addEventListener('submit', handleSubmit)