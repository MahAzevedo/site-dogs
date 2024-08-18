import React from 'react'
import Input from './Form/Input';

const App = () => {
    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null);

    function validateCep() { };

    function handleBlur({ target }) {
        const regex = /^\d{5}-?d{3}$/;
        const validacao = regex.test(target.value)
        console.log(validacao);
    };

    return (
        <form>
            <Input
                label="CEP"
                id="cep"
                type="text"
                value={cep}
                setValue={setCep}
                onBlur={handleBlur}
                placeholder="00000-000"
            />
            {cep}
        </form>
    );
};

export default App;

// linha 14: VALIDAÇÃO::
// ----->>> a validação acontece no onBlur!!!!!

// eu quero validar esse valor, como eu faço?
// a validação acontece no onBlur


// A forma MAIS FÁCIL DE FAZER VALIDAÇÃO É com ---->>>> REGEX
//   isso aqui é REGEX pra CEP --->>>  /^\d{5}-?\{3}$/;  ou assim  /^\d{5}-?\{3}$/.test();

//  Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares como o uso de parênteses e etc...