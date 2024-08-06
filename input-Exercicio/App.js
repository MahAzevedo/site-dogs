import React from 'react'

const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text',
    },
    {
        id: 'email',
        label: 'E-mail',
        type: 'email',
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password',
    },
    {
        id: 'numero', // aqui é o cep que é número
        label: 'Numero',
        type: 'text',
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text',
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text',
    },
    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text',
    },
    {
        id: 'estado',
        label: 'Estado',
        type: 'text',
    },
]

const App = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        numero: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    function handleChange() {
        const { id, value } = target;
        setForm({ ...form, [id]: value })
    };

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json',
            },
            body: JSON.stringify(form),
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type }) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                        type={type}
                        id={id}
                        value={form[id]}
                        onChange={handleChange} />
                </div>
            ))};
            <button>Enviar</button>
        </form>
    )
};

export default App;
