let viewPassword = document.querySelector('.view-password')
let loginButton = document.querySelector('#loginButton')

// LÓGICA DO BOTÃO DE LOGIN

loginButton.addEventListener('click', ()=>{

    

    let labelUser = document.querySelector('#labelUser')
    let inputUser = document.querySelector('#inputUser')

    let labelPassword = document.querySelector('#labelPassword')
    let inputPassword = document.querySelector('#inputPassword')

    let loginErro = document.querySelector('#loginErro')

    // CRIA UM ARRAY VAZIO PARA O LOCAOL STORAGE

    let listUser = []

    // CRIA UM OBJETO QUE IRA RECEBER PARAMETROS

    let valid = {
        name: '',
        user: '',
        email: '',
        password: ''
    }
    
    // VAI NO LOCAL STORAGE E PEGA O OBJETO cadastra CRIADO NO REGISTRO

    listUser = JSON.parse(localStorage.getItem('cadastro'))

    // FOREACH VARRE TODOS OS ITENS

    listUser.forEach((item)=>{

        //  SE O VALOR DO USUARIO = VALOR USSERCAD DO cadastra

        if(inputUser.value == item.userCad && inputPassword.value == item.passwordCad){
            valid = {
                name: item.nameCad,
                user: item.userCad,
                email: item.emailCad,
                password: item.passwordCad
            }
        }else{
            if(item == null){
                loginErro.setAttribute('style', 'display: block')
                loginErro.innerHTML = 'Sem usuários cadastrados'
    
                inputUser.focus()
            }
        }
    })
        if(inputUser.value == valid.user && inputPassword.value == valid.password){
            labelUser.setAttribute('style', 'color: green')
            inputUser.setAttribute('style', 'border-color: green')

            labelPassword.setAttribute('style', 'color: green')
            inputPassword.setAttribute('style', 'border-color: green')

            loginErro.setAttribute('style', 'display: none')

            // CRIANDO UM TOKEN

            let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)

            // NAO UTILIZA O JSON.STRINGFY POIS O TOKEN JA É UMA STRING

            localStorage.setItem('token', token)

            setTimeout(()=>{
                window.location.href = 'http://localhost:5000/logon.html?'
            }, 3000)
            
        }else{
            labelUser.setAttribute('style', 'color: red')
            inputUser.setAttribute('style', 'border-color: red')

            labelPassword.setAttribute('style', 'color: red') 
            inputPassword.setAttribute('style', 'border-color: red')

            loginErro.setAttribute('style', 'display: block')
            loginErro.innerHTML = 'Usuario ou Senha Incorretos'

            inputUser.focus()
        }
    })

viewPassword.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#inputPassword')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})