import React from 'react';

const types = {};

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if (!/^\d{5}-?d{3}$/.test(value)) {
            setError('Preencha um CEP válido');
            return false;
        } else {
            setError(null);
            return true;
        };
    };

    return {
        value,
        setValue,
    }
};

export default useForm;

// ::: Atenção :::
// No HOOK não RETORNA ELEMENTO, o que retorna SÃO PARTES ESPECÍFICAS DO HOOK QUE PRECISAR!!!!!!

// regex: regular expression, é o que significa
// regex: regular expression JavaScript

// setar valor é colocar o set e o setValue