// // O JS EXECUTA LINHA A LINHA POR ENQUANTO.

// console.log("Hello World!");

// let nota = Number(prompt("Qual a nota do aluno"));

// console.log(nota);

// // alert("A nota do aluno é: " + nota);

// // alert(`a nota do aluno é ${nota}.`);

// // estrutura do IF/else - define a condição.

// if (nota >= 6) {
//     alert(`Parabéns, o aluno foi aprovado!`);
// }

// //  especifica uma nova condição, quando for sequencia, estiver desencadeando

// else if (nota >= 5.5){
//     alert(`Parabéns, você foi aprovado, agradeça o sistema.`);
// }   
    
// //  O else é a última coisa - se nenhuma das condições não forem cumpridas faz isso:

//     else {
//     alert(`Nota insuficiente`);
// }

// // // // contador 

// //     while (CONDIÇÃO){
// // //     execução 

// // //     passo
// // // }


// let nota= Number(prompt(`Qual a nota do aluno?`));

// while (isNaN(nota)) {
//     nota= Number(prompt(`Por favor, digite um número. Qual é a nota do aluno?`));


// i ++;

// }

// if (i >= 5) {
//     alert (`você chegou no limite de tentativas, por favor tente novamente mais tarde.`);

// }

// alert(`A nota do aluno é ${nota}`);

// let contador = 0;

// while(contador < 10) {
//     console.log(contador);

//     // contador = contador + 1
//     // contador += 1;
//     contador ++;

// let valores = [15, 2, -10, 227, 458, 300];

// for(let valor of valores) {
//     console.log(valor);

//     // VERIFICAR SE O VALOR É PAR OU IMPAR E AVISAR NO CONSOLE.LOG O RESULTADO
// }

// let valores = [15, 2, -10, 227, 458, 300];

// for(let valor of valores) {
    
//     if (valor % 2 === 0){
//         console.log(`o número ${valor} é Par`);
//     }

//     else {
//         console.log(`o número ${valor} é ímpar.`);
//     }

// }


let lances = Number(prompt('Quantos lances de escada você gostaria de fazer?'))
let  material = '#';

let material = prompt (`Qual é o mateiral que você quer utilizar na escada?`);
let degrau = material;
let i = 0

while (1 < lances) {

    console.log (degrau);
    // degrau = degrau + material;
    degrau += material;

    i ++;

}