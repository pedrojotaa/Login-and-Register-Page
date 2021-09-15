//BOTÃO PAGINA INICIAL

let buttonInicio = document.querySelector('#innerButton')

buttonInicio.addEventListener('click', ()=>{
    window.location.href = 'http://localhost:5000/login.html?'
})

// ANIMAÇÃO

const item = document.querySelectorAll('[data-anime]')

const animaScroll = () => {
    //tamanho do topo da tela no momento em relação a tela total no eixo Y
    const windowTop = window.pageYOffset + window.innerHeight * 0.85

    item.forEach(element =>{
        //se o topo da pagina > altura que o elemento esta do topo
        if(windowTop > element.offsetTop){
            element.classList.add('animation')
        }else{
            element.classList.remove('animation')
        }
    })
}
//sempre fica ligado
animaScroll()

//funcção de callback
window.addEventListener('scroll', () => {
    animaScroll()
})