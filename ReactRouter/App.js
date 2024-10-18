import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login-HookUseNavigate';
import Produto from './useParams/Produto'; // aqui tem o useParams pq eu coloquei Produto dentro da pasta Produto.js, senão, ficaria só './Produto'
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
<div></div>;
export default App;

// Dentro do Route, coloca path="" -->> <Route path="/" />   esse é o caminho da HOME

// HOME -->> é só colocar barra/ que tá indicando o caminho da HOME
// quando tiver o barra/ significa que é o caminho para HOME

// *** ATENÇÃO *** SOBRE ENCONTRAR PÁGINA -->> /:id/* pra quê isso serve:
// <Route path="produto/:id/*" element={<Produto />} />   -->> aqui se tiver uma barra/ depois vai dar erro pq é uma barra/ não encontrada, então tem que colocar o asterisco*, o asterisco* significa que pode ser produto/id/e qualquer outra coisa alí pra tentar encontrar
