import React from 'react'

const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text'
    },
    {
        id: 'email',
        label: 'E-mail',
        type: 'email'
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password'
    },
]

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

    function handlechange() {
        const { id, value } = target;
        setForm({ ...form, [id]: value })
    };

    return <form>
        <label htmlFor='nome'>Nome</label>
        <input type='text' id='nome' value={form.nome} onChange={handlechange} />
        <label htmlFor='email'>E-mail</label>
        <input
            type='email'
            id='email'
            value={form.email}
            onChange={handlechange}
        />
    </form>
};

export default App;
