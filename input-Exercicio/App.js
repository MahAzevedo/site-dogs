import React from 'react'

const App = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    return (
        <form></form>
    )
};

export default App;
