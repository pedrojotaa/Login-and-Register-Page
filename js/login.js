let showPassword = document.querySelector('.show-password')
let loginButton = document.querySelector('#loginButton')

loginButton.addEventListener('click', (evento)=>{

    evento.preventDefault()

    // UTILIZANDO O DOM

    let labelUser = document.querySelector('#labelUser')
    let user = document.querySelector('#user')

    let labelPassword = document.querySelector('#labelPassword')
    let password = document.querySelector('#password')

    let erro = document.querySelector('#msgErro')

    // ARRAY VAZIA PARA O LOCAOL STORAGE

    let listaUser = []

    // OBJETO QUE IRA RECEBER PARAMETROS

    let valid = {
        nome: '',
        usuario: '',
        email: '',
        senha: ''
    }

    // PARSE TRANSFORMA STRING EM OBJETO

    listaUser = JSON.parse(localStorage.getItem('cadastra'))

    // FOREACH VARRE TODOS OS ITENS

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

        // NAO UTILIZA O JSON.STRINGFY POIS TOKEN JA É UMA STRING

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        window.location.href = 'http://localhost:5000/logado.html?'
    }else{
        labelUser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')

        labelPassword.setAttribute('style', 'color: red') 
        password.setAttribute('style', 'border-color: red')

        erro.setAttribute('style', 'display: block')
        erro.innerHTML = 'Usuario ou Senha Incorretos'

        user.focus()
    }
})

showPassword.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#password')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})