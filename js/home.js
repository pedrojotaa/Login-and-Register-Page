let outButton = document.querySelector('#out-bt')

outButton.addEventListener('click',(event)=>{
    event.preventDefault()

    localStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5500/index.html?'
})

if(localStorage.getItem('token')==null){
    alert('Você precisa estar logado para acesar esta pagina!')
    window.location.href = 'http://127.0.0.1:5500/index.html?'
}