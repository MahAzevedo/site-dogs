import React from 'react';

const types = {
    cep: {
        regex: /^\d{5}-?d{3}$/,
        message: 'CEP inválido'
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
};

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if (!types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        };
    };

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    };

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
};

export default useForm;

// ::: Atenção :::
// No HOOK não RETORNA ELEMENTO, o que retorna SÃO PARTES ESPECÍFICAS DO HOOK QUE PRECISAR!!!!!!

// regex: regular expression, é o que significa
// regex: regular expression JavaScript

// setar valor é colocar o set e o setValue

// Não existe regex pra nome de pessoa, nome de pessoa é nome de pessoa.