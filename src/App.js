import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
    const { pathname } = window.location;

    let Pagina;
    if (pathname === '/produtos') {
        Pagina = Produtos
    } else {
        Pagina = Home;
    }

    return (
        <section>
            <Header />
            <Pagina />
        </section>
    )
}

export default App;



import React from 'react'

const App = () => {
    const ativo = ativo;

    return <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default App











import React from 'react'

const App = () => {
    const [contar, setContar] = React.useState(1);
    const [items, setItems] = React.useState(['Item 1']);

    return (
        <div>

        </div>
    )
}

export default App
