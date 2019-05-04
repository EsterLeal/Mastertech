const menuHamburguer = 
document.querySelector('.menu-hamburguer');

const navMenuHamburguer = 
document.querySelector('.nav-menu-hamburguer');

const atualizarMenu = function (){
    menuHamburguer.classList.toggle('ativo');
    navMenuHamburguer.classList.toggle('visivel');
}

menuHamburguer.onclick= atualizarMenu;






const quadrado = document.querySelector('.quadrado');
const imgFaustao = document.querySelector('img')

const mostrarQuadrado = function (){
    quadrado.classList.toggle ('visivel');
}



// 1 - faça seletores (variáveis) 2 -  criar funções e 3-código de atribuições de eventos, adc e remove coisas.

const destaqueImagem = function () {
    imgFaustao.classList.toggle('destaque');
}

// quadrado.onmouseover = mostrarQuadrado;
quadrado.onmouseenter = mostrarQuadrado;
quadrado.onmouseout = mostrarQuadrado;

imgFaustao.onmouseenter = destaqueImagem;
imgFaustao.onmouseout = destaqueImagem;