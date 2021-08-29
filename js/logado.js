let sair = document.querySelector('#sair')

sair.addEventListener('click',()=>{
    localStorage.removeItem('token')
    window.location.href = 'http://localhost:5000/index.html?'
})

if(localStorage.getItem('token')==null){
    alert('voce precisa estar logado para acesar a pagina')
    window.location.href = 'http://localhost:5000/index.html?'
}