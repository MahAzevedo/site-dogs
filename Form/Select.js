import React from 'react'

const Select = ({ options, value, setValue, ...props }) => {
    return (
        <select value={value} onChange={({ target }) => setValue(target.value)} {...props}>
            <option value="" disabled>
                Selecione
            </option>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))};
        </select>
    );
};

export default Select;



// linha 6: pra deixar escrito no campo a palavra SELECIONE, faça isso:  <option value="" disabled>Selecione</option> e o que estiver escrito é o que vai aparecer dentro do campo selecionado