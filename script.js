// const menu = {
//     seletor: '.principal',
// }

// console.log(menu.seletor.toUpperCase());
//----------------------


// function upperName(name) {
//     return name.toUpperCase();
// }

// console.log(upperName('Mádjan'));

//----------------------


// const upperName = (name) => {
//     return name.toUpperCase();
// };


//--------------------------

const upperName = (name) => name.toUpperCase();

console.log(upperName('Mádjan'));
//-------------------------


// function handleMouse(event) {  // isso aqui é uma  desestruturação
function handleMouse({ clientX, clientY }) {
    // const { clientX, clientY } = event;

    console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);
// tudo é objeto
// null e o undefined não é um objeto
// react 



// array : desestruturação de uma array de frutas
// isso aqui é funcão nova do React: que são os REACTS ROUTES, ele ffunciona logo de cara com a desestruturação. Ele RETORNA VALOR e uma FUNÇÃO e que ATUALIZA O VALOR 
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1)

const useQuadrado = [
    4,
    function (lado) {
        return 4 * lado;
    },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(5));


// Rest spread : são 3 pontinhos -> ... O operador rest são 3 pontinhos ...    significa: pega todo o restante dos itens e coloca dentro da array cliente 

function showList(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    })
}
showList('Google', 'Mádjan', 'Gustavo', 'item 2');

// spread : serve para espalhar os itens do array

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, ...numeros, 24, 32, 32];
console.log(numeros2);


const carro = {
    cor: 'azul',
    portas: 4,
}

// desestrutura, desestruturação
// novo objeto abaixo o que tá dentro das chaves
/*
carroAno = { ...carro, ano: 2008 };
console.log(carroAno);
*/



// --------------------------------*****-------

// MODULES : para a criação de componentes do react
/*
Module
Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.

***** Só funciona em servidor, seja local ou online
Não irá funcionar se você abrir o html direto
*/

// import { areaQuadrado, perimetroQuadrado } from "./quadrado.js"
// console.log(areaQuadrado(5));
// console.log(perimetroQuadrado(5));

import quadrado from "./quadrado.js";
console.log(quadrado.perimetroQuadrado(5))


import numeroAleatorio from "./numeroAleatorio.js";
console.log(numeroAleatorio());


// module
// é onde carrega a informação
// import é onde importa a informação, ou seja, é de onde importa a informação que será levada de um canto para o outro com o endereço que será completado colocando o nome do arquivo e o from 

/*
P) pq precisa do import e do from? 
R) pq vc vai importar de algum lugar, como assim?
importar de um lugar que tem nome e esse nome é o nome do arqwuivp e o de/from com o endereço para que o programa saiba da onde ele saiu. 
E se for js, tem que colocar o js no final
js
*/

import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
console.log(perimetroQuadrado(5));