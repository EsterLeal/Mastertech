let cartas = document.querySelectorAll('.carta');

const aleatorio= function (min = 0, max = 8 -1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let texto = "Você é bom de memória? Vamos testar! Escolha duas cartas.";

let chances = 4;

let listaReferencia = ["img/capaldi.jpg", "img/brisa.jpg", "img/setedocs.jpg", "img/doctor.png", "img/capaldi.jpg", "img/brisa.jpg", "img/setedocs.jpg", 
"img/doctor.png"]; 
let lista = ["img/capaldi.jpg", "img/brisa.jpg", "img/setedocs.jpg", "img/doctor.png", "img/capaldi.jpg", "img/brisa.jpg", "img/setedocs.jpg", 
"img/doctor.png"];

let i = 0;
let listaEmbaralhada = [];

while (i < listaReferencia.length) {
    let j = aleatorio (0, lista.length -1);
    let valor = lista[j]; 
    listaEmbaralhada.push(valor);
    lista.splice(j, 1);

    i++;
}


const mostrarCarta = function (carta) {
    carta.classList.toggle('verso');
}


for (let carta of cartas) {
    console.log(carta);
    carta.onclick = function() {
        mostrarCarta(carta);
    }
}



// let a1 = document.querySelector('.a1');
// let a2 = document.querySelector('.a2');
// let a3 = document.querySelector('.a3');
// let a4 = document.querySelector('.a4');
// let b5 = document.querySelector('.b5');
// let b6 = document.querySelector('.b6');
// let b7 = document.querySelector('.b7');
// let b8 = document.querySelector('.b8');


// let embaralhado = 8;

// let embaralhado = lista[aleatorio(0, lista.length - 1)];
  


// let a1Mostrar= function (){
//     a1.classList.toggle('verso');
// }
// let a2Mostrar= function (){
//     a2.classList.toggle('verso');
// }
// let a3Mostrar= function (){
//     a3.classList.toggle('verso');
// }
// let a4Mostrar= function (){
//     a4.classList.toggle('verso');
// }
// let b5Mostrar= function (){
//     b5.classList.toggle('verso');
//     // b6Mostrar();
// }
// let b6Mostrar= function (){
//     b6.classList.toggle('verso');
// }
// let b7Mostrar= function (){
//     b7.classList.toggle('verso');
// }
// let b8Mostrar= function (){
//     b8.classList.toggle('verso');
// }


// a1.onclick = a1Mostrar;
// a2.onclick = a2Mostrar;
// a3.onclick = a3Mostrar;
// a4.onclick = a4Mostrar;
// b5.onclick = b5Mostrar;
// b6.onclick = b6Mostrar;
// b7.onclick = b7Mostrar;
// b8.onclick = b8Mostrar;