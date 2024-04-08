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
