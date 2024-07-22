import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
    let pagina = Home;
    const { pathname } = window.location;
    i(pathname === '/produtos') {
        Pagina = Produtos
    } else {
        Pagina = Home
    }

    return (
        <section>
            <Header />
            <Pagina />
        </section>
    )
}

export default App






