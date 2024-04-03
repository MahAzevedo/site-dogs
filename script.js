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


function handleMouse(event) {
    const x = event.clientX;
    const y = event.clientY;

    console.log(x, y);
}

document.addEventListener('click', handleMouse);
// tudo é objeto
// null e o undefined não é um objeto
// react