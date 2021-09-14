let outButton = document.querySelector('#outButton')

outButton.addEventListener('click',(event)=>{
    event.preventDefault()

    localStorage.removeItem('token')
    window.location.href = 'http://localhost:5000/index.html?'
})

if(localStorage.getItem('token')==null){
    alert('Você precisa estar logado para acesar esta pagina!')
    window.location.href = 'http://localhost:5000/index.html?'
}