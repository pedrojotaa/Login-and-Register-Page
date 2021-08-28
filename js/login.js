let eyeLogin = document.querySelector('.eye')

eyeLogin.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#password')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})