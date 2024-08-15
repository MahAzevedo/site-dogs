import React from 'react'

const Input = ({ id, label, setValue, ...props }) => {

    return (
        <>
            <label htmlFor="id">{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                onChange={({ target }) => setValue = (target.value)}
                {...props}
            />
        </>
    );
};

export default Input;

// A ideia aqui é otimizar (reciclar) componentes, se são repetidos dá para usar mais vezes

// linhas 6 e 15: em vez de usar uma <div> usei o <></> fragmento, que nada mais é do que uma tag vazia, escolhida para evitar criar uma <div> desnecessária.
// ou ainda nas:
// linhas 6 e 15: se envolver em <p> ele cria um espaçamento já

// para desestruturar se usa os três pontos assim-> ...


