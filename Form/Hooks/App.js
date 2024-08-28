import React from 'react'
import Input from './Form/Input';
import useForm from './Hooks/useForm';
import { text } from 'body-parser';

const App = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm('');
    const sobrenome = useForm('false');

    function handleSubmit(event) {
        event.preventDefault();
        if (cep.validate() && email.validate() && nome.validade()) {
            console.log('Enviou');
        } else {
            console.log('Não enviar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nome"
                id="nome"
                type="text"
                {...nome}
            />
            <Input
                label="Sobrenome"
                id="sobrenome"
                type="text"
                {...sobrenome}
            />
            <Input
                label="CEP"
                id="cep"
                type="text"
                placeholder="00000-000"
                {...cep}
            />
            <Input
                label="E-mail"
                id="email"
                type="email"
                {...email}
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    );
};

export default App;

// retirado do App.js onBlur-Validacao

/*
 linha 10: esse if --->>> if (cep.validate()) {}
 Dentro desse if tem esse método: cep.validate()  ele serve para qualquer função que queira validar.
 Dá para utilizar esse cep.validate() como se fosse um método e ele vai validar esse cep pra mim. 
 E pode passar isso em qualquer lugar que quiser para validar esse informação.
*/