let botao = document.querySelector('.botao-menu')
let menu = document.querySelector('.menu')

function cliqueiNoBotao(){
    menu.classList.toggle('ativo');
}

botao.addEventListener('click', cliqueiNoBotao)