//BOTÃO PAGINA INICIAL

let innerButton = document.querySelector('#login-page')
let registerButton = document.querySelector('#register-page')

innerButton.addEventListener('click', ()=>{
    window.location.href = 'http://127.0.0.1:5500/login.html'
})

registerButton.addEventListener('click', ()=>{
    window.location.href = 'http://127.0.0.1:5500/register.html'
})

//ANIMAÇÃO

const item = document.querySelectorAll('[data-anime]')

const animaScroll = () => {
    //o topo da pagina é 0 e ao scrollar vai aumentando
    const windowTop = window.pageYOffset

    item.forEach(element =>{
        //se o topo da pagina for 0
        if(windowTop == 0){
            element.classList.add('animation')
        }else{
            element.classList.remove('animation')
        }
    })
}
//SEMPRE LIGADO
animaScroll()