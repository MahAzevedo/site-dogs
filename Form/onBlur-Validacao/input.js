import React from 'react'

const Input = ({ id, label, onChange, ...props }) => {

    return (
        <>
            <label htmlFor="id">{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                onChange={onChange}
                {...props}
            />
        </>
    );
};

export default Input;

// Atenção:::
// esse aqui é o Input do Form, que foi usado como base, esse aqui foi modificado para se adaptar ao -->> onBlur