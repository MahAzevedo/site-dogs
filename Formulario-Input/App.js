import React from 'react'

const App = () => {
    const [nome, setNome] = React.useState('');


    return (
        <form>
            <label htmlFor='nome'>Nome</label>
            <input
                id='nome'
                type='text'
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
        </form>
    );
};

export default App;
