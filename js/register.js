/* CHAMANDO CLASSES E ID DO HTML PARA CRIAR CONSTANTES */

let eyeCreate = document.querySelector('.eye-create')
let eyeConfirm = document.querySelector('.eye-confirm')

let labelNome = document.querySelector('#labelCreateName')
let nome = document.querySelector('#createName')
let validaNome = false

let labelUsuario = document.querySelector('#labelCreateUser')
let usuario = document.querySelector('#createUser')
let validaUsuario = false

let labelEmail = document.querySelector('#labelCreateEmail')
let email = document.querySelector('#createEmail')
let validaEmail = false

let labelSenha = document.querySelector('#labelCreatePassword')
let senha = document.querySelector('#createPassword')
let validaSenha = false

let labelConfirmaSenha = document.querySelector('#labelConfirmPassword')
let confirmaSenha = document.querySelector('#confirmPassword')
let validaConfirmaSenha = false

let registra = document.querySelector('#registra')

let registraErro = document.querySelector('#registerError')
let registraSuccess = document.querySelector('#registerSuccess')

/* FUNÇÃO PARA VISUALIZAR A SENHA */

eyeCreate.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#createPassword')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})

eyeConfirm.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#confirmPassword')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})

/* FUNÇÃO PARA VALIDAR OS CAMPOS */

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <=3){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML= 'Nome *insira no minimo 4 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validaNome = false
    }else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML= 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validaNome = true
    }
})

usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length <=5){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML= 'Usuario *insira no minimo 6 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validaUsuario = false
    }else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML= 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validaUsuario = true
    }
})

email.addEventListener('keyup', ()=> {
    if(email.value.length <=5){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML= 'Email *insira no minimo 6 caracteres'
        email.setAttribute('style', 'border-color: red')
        validaEmail = false
    }else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML= 'Email'
        email.setAttribute('style', 'border-color: green')
        validaEmail = true
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <=5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML= 'Senha *insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validaSenha = false
    }else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML= 'Email'
        senha.setAttribute('style', 'border-color: green')
        validaSenha = true
    }
})

confirmaSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmaSenha.value){
        labelConfirmaSenha.setAttribute('style', 'color: red')
        labelConfirmaSenha.innerHTML= 'Senha *as senhas nao correspondem'
        confirmaSenha.setAttribute('style', 'border-color: red')
        validaConfirmaSenha = false
    }else {
        labelConfirmaSenha.setAttribute('style', 'color: green')
        labelConfirmaSenha.innerHTML= 'Senha *conforme'
        confirmaSenha.setAttribute('style', 'border-color: green')
        validaConfirmaSenha = true
    }
})

/* FUNÇÃO PARA CADASTRAR NO LOCAL STORAGE */

registra.addEventListener('click', (evento)=>{
    
    evento.preventDefault()

    if(validaNome && validaUsuario && validaEmail && validaSenha && validaConfirmaSenha){
        registraSuccess.innerHTML = 'Registrado com sucesso'
        registraSuccess.setAttribute('style', 'display: block')
        registraErro.innerHTML = ''
        registraErro.setAttribute('style', 'display: none')

        let cadastra = JSON.parse(localStorage.getItem('cadastra') || '[]')

        cadastra.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            emailCad: email.value,
            senhaCad: senha.value
        })

        localStorage.setItem('cadastra', JSON.stringify(cadastra))

        setTimeout(()=>{
            window.location.href= "http://localhost:5000/index.html"
        },3000)

        }else{

        registraErro.innerHTML = 'Nao foi possivel registrar'
        registraErro.setAttribute('style', 'display: block')
        registraSuccess.innerHTML = ''
        registraSuccess.setAttribute('style', 'display: none')

    }
})

