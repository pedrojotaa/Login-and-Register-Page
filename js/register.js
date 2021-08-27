let eyeCreate = document.querySelector('.eye-create')

eyeCreate.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#create-password')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})

let eyeConfirm = document.querySelector('.eye-confirm')

eyeConfirm.addEventListener('click', ()=> {
    let inputPassword = document.querySelector('#confirm-password')

    if(inputPassword.getAttribute('type')=='password'){
        inputPassword.setAttribute('type','text')
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})
