import React from 'react'
import Input from './Form/Input';

const App = () => {
    const [cep, setCep] = React.useState('');

    function handleBlur({ target }) {
        console.log(target.value);
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
