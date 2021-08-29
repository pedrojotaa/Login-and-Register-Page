let eyeLogin = document.querySelector('.eye')
let login = document.querySelector('#login')

login.addEventListener('click', (evento)=>{

    evento.preventDefault()

    let labelUser = document.querySelector('#labelUser')
    let user = document.querySelector('#user')

    let labelPassword = document.querySelector('#labelPassword')
    let password = document.querySelector('#password')

    let erro = document.querySelector('#msgErro')

    let listaUser = []

    // criando objeto que eu quero que recebe parametros//

    let valid = {
        nome: '',
        usuario: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('cadastra'))

    // o foreach vai varrer tudo//
    listaUser.forEach((item)=>{
        if(user.value == item.userCad && password.value == item.senhaCad){
            valid = {
                nome: item.nomeCad,
                usuario: item.userCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })
    if(user.value == valid.usuario && password.value == valid.senha){
        labelUser.setAttribute('style', 'color: green')
        user.setAttribute('style', 'border-color: green')
        labelPassword.setAttribute('style', 'color: green')
        password.setAttribute('style', 'border-color: green')
        erro.setAttribute('style', 'display: none')

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)

        localStorage.setItem('token', token)

        window.location.href = 'http://localhost:5000/logado.html?'

        //local storage so aceita string//

    }else{
        labelUser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPassword.setAttribute('style', 'color: red') 
        password.setAttribute('style', 'border-color: red')
        erro.setAttribute('style', 'display: block')
        erro.innerHTML = 'Usuario ou senha incorretos'
        user.focus()
    }
})

eyeLogin.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#password')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})