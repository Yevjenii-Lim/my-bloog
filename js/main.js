let buttonMenu = document.querySelector('.toggle-icon')
let header = document.querySelector('header')

buttonMenu.addEventListener('click', openMenu)

function openMenu(){
    if(header.style.height != '70vh'){
        header.style.height = 70+'vh'
    }else {
        header.style.height = 10+'vh'
    }
    
}