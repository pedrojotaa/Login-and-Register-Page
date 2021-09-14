/* VISUALIZADOR DE SENHA */

let viewPasswordRegister = document.querySelector('.view-register')
let viewPasswordConfirm = document.querySelector('.view-confirm')

/* LABEL E INPUT */

let labelName = document.querySelector('#labelCreateName')
let inputName = document.querySelector('#inputCreateName')
let validName = false

let labelUser = document.querySelector('#labelCreateUser')
let inputUser = document.querySelector('#inputCreateUser')
let validUser = false

let labelEmail = document.querySelector('#labelCreateEmail')
let inputEmail = document.querySelector('#inputCreateEmail')
let validEmail = false

let labelPassword = document.querySelector('#labelCreatePassword')
let inputPassword = document.querySelector('#inputCreatePassword')
let validPassword = false

let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let inputConfirmPassword = document.querySelector('#inputConfirmPassword')
let validConfirmPassword = false

/* BOTÃO DE REGISTRO */

let registerButton = document.querySelector('#registerButton')

/* ERRO DO REGISTRO */

let registerErro = document.querySelector('#registerError')
let registerSuccess = document.querySelector('#registerSuccess')

///////////////////////////////////////////////////////////////////////////////////////

/* FUNÇÃO PARA VALIDAR OS CAMPOS */

inputName.addEventListener('keyup', ()=> {
    if(inputName.value.length <=3){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML= 'Nome *insira no minimo 4 caracteres'
        inputName.setAttribute('style', 'border-color: red')
        validName = false
    }else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML= 'Nome'
        inputName.setAttribute('style', 'border-color: green')
        validName = true
    }
})

inputUser.addEventListener('keyup', ()=> {
    if(inputUser.value.length <=5){
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML= 'Usuario *insira no minimo 6 caracteres'
        inputUser.setAttribute('style', 'border-color: red')
        validUser = false
    }else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML= 'Usuario'
        inputUser.setAttribute('style', 'border-color: green')
        validUser = true
    }
})

inputEmail.addEventListener('keyup', ()=> {
    if(inputEmail.value.length <=5){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML= 'Email *insira no minimo 6 caracteres'
        inputEmail.setAttribute('style', 'border-color: red')
        validEmail = false
    }else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML= 'Email'
        inputEmail.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

inputPassword.addEventListener('keyup', ()=> {
    if(inputPassword.value.length <=5){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML= 'Senha *insira no minimo 6 caracteres'
        inputPassword.setAttribute('style', 'border-color: red')
        validPassword = false
    }else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML= 'Senha correta'
        inputPassword.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

inputConfirmPassword.addEventListener('keyup', ()=> {
    if(inputConfirmPassword.value != inputPassword.value){
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML= 'Senha *as senhas nao correspondem'
        inputConfirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    }else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML= 'Senha *conforme'
        inputConfirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})

/* FUNÇÃO PARA CADASTRAR NO LOCAL STORAGE */

registerButton.addEventListener('click', ()=>{
    
    /* SE TUDO FOR = TRUE */

    if(validName && validUser && validEmail && validPassword && validConfirmPassword){
        registerSuccess.innerHTML = 'Registrado com sucesso'
        registerSuccess.setAttribute('style', 'display: block')
        registerErro.innerHTML = ''
        registerErro.setAttribute('style', 'display: none')

        let register = JSON.parse(localStorage.getItem('cadastro') || '[]')

            register.push({
                
                /* PARÂMETRO: OBJETO */
                nameCad: inputName.value,
                userCad: inputUser.value,
                emailCad: inputEmail.value,
                passwordCad: inputPassword.value
            })

            localStorage.setItem('cadastro', JSON.stringify(register))

            setTimeout(()=>{
                window.location.href= 'http://localhost:5000/login.html?'
            }, 3000)

            }else{
            registerErro.innerHTML = 'Nao foi possivel registrar'
            registerErro.setAttribute('style', 'display: block')
            registerSuccess.innerHTML = ''
            registerSuccess.setAttribute('style', 'display: none')
            }
})

/* FUNÇÃO PARA VISUALIZAR A SENHA */

viewPasswordRegister.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#inputCreatePassword')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    }else{
        inputPassword.setAttribute('type', 'password')
    }
})

viewPasswordConfirm.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#inputConfirmPassword')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    }else{
        inputPassword.setAttribute('type', 'password')
    }
})
