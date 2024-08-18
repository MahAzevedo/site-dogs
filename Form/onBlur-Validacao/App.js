import React from 'react'
import Input from './Form/Input';

const App = () => {
    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null);

    function validateCep(value) {
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

    function handleBlur({ target }) {
        (validateCep(target.value));
    };

    function handleChange({ target }) {
        if (error) validateCep(target.value);
        setCep(target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (validateCep(cep)) {
            console.log('Enviou');
        } else {
            console.log('Não enviar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="CEP"
                id="cep"
                type="text"
                value={cep}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="00000-000"
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
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

// Pq passou a função -->> onChange e -->> handleChange no lugar se  -->> setCep????
// Pq estou passando a função direta, e função de mudança fica do lado de FORA do FORMULÁRIO, ao invés de ficar do lado de dentro pq agora quero lidar com a validação também.



// essa forma de fazer é boa, porém, não está tão otimizado, vamos fazer um HOOK pra poder reutilizar a validação pra CEP, E-MAIL, E ETC, não vai ser tão otimizado, por isso criar o HOOK que dá para melhor usar em todo momento que for preciso fazer uma validação!!!! (e etc)