import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';
import Footer from './Footer';
import Login from './Login-HookUseNavigate';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="Login" element={<Login />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;


// Dentro do Route, coloca path="" -->> <Route path="/" />   esse é o caminho da HOME

// HOME -->> é só colocar barra/ que tá indicando o caminho da HOME
// quando tiver o barra/ significa que é o caminho para HOME                         