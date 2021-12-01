let viewPassword = document.querySelector('#view-password')
let loginButton = document.querySelector('#login-bt')

// LÓGICA DO BOTÃO DE LOGIN

loginButton.addEventListener('click', (event)=>{
    event.preventDefault()

    let labelUser = document.querySelector('#labelUser')
    let inputUser = document.querySelector('#inputUser')

    let labelPassword = document.querySelector('#labelPassword')
    let inputPassword = document.querySelector('#inputPassword')

    let loginErro = document.querySelector('#loginErro')

    // CRIA UM ARRAY VAZIO PARA O LOCAOL STORAGE

    let listUser = []
    
    // VAI NO LOCAL STORAGE E PEGA O OBJETO cadastro CRIADO NO REGISTRO

    listUser = JSON.parse(localStorage.getItem('cadastro') || '[]')

    // FOREACH VARRE TODOS OS ITENS

    listUser.forEach((item)=>{

        //  SE O VALOR DO USUARIO = VALOR USSERCAD DO cadastra

        if(inputUser.value == item.userCad && inputPassword.value == item.passwordCad){
            labelUser.setAttribute('style', 'color: green')
            inputUser.setAttribute('style', 'border-color: green')
    
            labelPassword.setAttribute('style', 'color: green')
            inputPassword.setAttribute('style', 'border-color: green')
    
            loginErro.setAttribute('style', 'display: none')
    
            let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
    
            localStorage.setItem('token', token)
    
            setTimeout(()=>{
                window.location.href = 'dashboard.html?'
            }, 3000)
        }else{
            loginErro.removeAttribute('style', 'display: none')
            loginErro.setAttribute('style', 'display: block')
            loginErro.innerHTML = 'Usuario ou Senha Incorretos'
    
            inputUser.focus()
        }
    })
})

viewPassword.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#inputPassword')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})