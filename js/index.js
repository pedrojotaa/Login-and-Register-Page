//BOTÃO PAGINA INICIAL

let buttonInicio = document.querySelector('#innerButton')

buttonInicio.addEventListener('click', ()=>{
    window.location.href = 'http://localhost:5000/login.html?'
})