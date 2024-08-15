import React from 'react'

const Input = ({ id, label, value }) => {

    return (
        <div>
            <label htmlFor="id">{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={({ target }) => setValue = (target.value)}
            />
        </div>
    );
};

export default Input;

// A ideia aqui é otimizar (reciclar) componentes, se são repetidos dá para usar mais vezes 





