import React from 'react';
// import './Header.css'; desativei pq coloquei o activeStyle={{color:'tomato}} dentro 
import { NavLink, NavLinkLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    React.useEffect(() => {
        console.log('Mudou a rota'); // esse aqui serve para GoogleAnalitics, que vc consegue saber qaundo a rota mudar
    }, [location]);

    return (
        <nav>
            <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
                Home
            </NavLink>{''}
            |{''}
            <NavLink activeStyle={{ color: 'tomato' }} to="sobre">
                Sobre
            </NavLink>{''}
            |{''}
            <NavLink activeStyle={{ color: 'tomato' }} to="login">
                Login
            </NavLink>
        </nav>
    );
};

export default Header;


// Link:
// onde era Link, coloquei-> NavLink, que é o irmão do Link, funciona da mesma forma, só que mostra qual é a página ativa no momento

// *** ATENÇÃO ***
// Na página Home que tem o barra/, e o barra/ em si que tá presente no Sobre e tá presente em todas as outras páginas, TEM QUE ESPECIFICAR o END -->> end, que seria pra dizer que é o final, usa assim -->> <NavLink to="/" end>

// Header é ELEMENTO GLOBAL