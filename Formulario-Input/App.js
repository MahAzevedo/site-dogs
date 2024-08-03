import React from 'react'

const App = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [form, setForm] = React.useState({ /*forma de fazer nome e email como um objeto dentro do form */
        nome: '',
        email: ''
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='nome'>Nome</label>
            <input
                id='nome'
                type='text'
                name='nome'
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <label htmlFor='email'>E-mail</label>
            <input
                id='email'
                type='email'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <button>Enviar</button>
        </form>
    );
};

export default App;
