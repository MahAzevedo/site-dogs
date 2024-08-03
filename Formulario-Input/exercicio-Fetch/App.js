// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // form é o objeto com os dados do formulário
    body: JSON.stringify(form),
});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva



import React from 'react'

const App = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [cep, setCep] = React.useState('');
    const [rua, setRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');

    // esse aqui embaixo se for fazer como objeto
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
    };

    function pevent()
    return (
        <form>
            <label onSubmit={handleSubmit}>Nome</label>
            <input
                id='nome'
                type='text'
                name='nome'
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <button>Enviar</button>
        </form>
    )
}

export default App
