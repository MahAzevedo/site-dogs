import React from 'react';
// import './Header.css'; desativei pq coloquei o activeStyle={{color:'tomato}} dentro 
import { NavLink, NavLinkLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
                Home
            </NavLink>{''}
            |{''}
            <NavLink to="Sobre" activeStyle={{ color: 'tomato' }}>
                Sobre
            </NavLink>
        </nav>
    );
};

export default Header;


// Link:
// onde era Link, coloquei-> NavLink, que é o irmão do Link, funciona da mesma forma, só que mostra qual é a página ativa no momento

// *** ATENÇÃO ***
// Na página HOme que tem o barra/, e o barra/ em si que tá presente no Sobre e tá presente em todas as outras páginas, TEM QUE ESPECIFICAR o END -->> end, que seria pra dizer que é o final, usa assim -->> <NavLink to="/" end>