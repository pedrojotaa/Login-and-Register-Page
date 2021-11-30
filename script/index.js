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

animaScroll()