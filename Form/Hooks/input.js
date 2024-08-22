import React from 'react'

const Input = ({ id, label, onChange, value, type, onBlur, placeholder, error }) => {

    return (
        <>
            <label htmlFor="id">{label}</label>
            <input
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                type={text}
                value={value}
            />
            {error && <p>{error}</p>}
        </>
    );
};

export default Input;

// Atenção:::
// esse aqui é o Input do Form, que foi usado como base, esse aqui foi modificado para se adaptar ao -->> Hook, pasta do input HOOK