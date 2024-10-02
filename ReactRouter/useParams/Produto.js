import React from 'react';
import { useParams } from 'react-router';
import { URLSearchParams } from 'url';
import ProdutoDescricao from '../NestedRoutes/ProdutoDescricao';
import ProdutoAvaliacao from '../NestedRoutes/ProdutoAvaliacao';
import ProdutoCustomizado from '../NestedRoutes/ProdutoCustomizado';
import { NavLink } from 'react-router-dom';

const Produto = () => {
    const params = useParams();
    const location = useLocation();
    console.log(location);
    const search = new URLSearchParams(location.search)
    console.log(search.get('memoria'));

    return (
        <div>
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="customizado" element={<ProdutoCustomizado />} />
            </Routes>
        </div>
    );
};

export default Produto;


// *** ROTA DINÂMICA ***
// Pergunta: Como que usa?
// Resposta: Usando o dois pontos id -->> :id, exemplo: <Route path="produto/:id" />
// Uso quando não tenho só o valor fixo, mas também, o valor variável, ou seja, valor dinâmico
// É mais usado pra fazer rota dinâmica exemplo: produto/notebook ou produto/smartphone, pq esse valor de notebook é dinâmico, ele pode ser /smartphone, /tablet, /notebook2
// e sempre com a /barra na frente pra ir na raíz do produto

// Routes -->> COM S: é sempre ele quem ENVOLVE ROTAS
// e dentro dele é que define as rotas, no Route SEM S
// *** RouteS envolve as rotas ***
// *** Route que define as rotas ***
// Exemplo:
//  <Routes>
//     <Route path="" element={} />
//  </Routes>

// linha20:  <NavLink to="">Descrição</NavLink>  -->> navegando o link para, é isso o que quer dizer isso

// linha 25:  <Route path="/" element={<ProdutoDescricao />} />  -->> tem essa barra/ pq ela é a RAÍZ, vem dessa rasíz as outras páginas
// linha 26: <Route path="avaliacao" element={<ProdutoAvaliacao />} /> -->> essa aqui, no path, já não tem barra/, no lugar tá escrito o caminho que ele precisa queé o de avaliacao


// *** Essa aqui é uma ROTA ANINHADA E DINÂMICA ***

// *** SEM O /:id/ ESSA ROTA NÃO FICA MAIS DINÂMICA ***
// o asterisco* depois do produto ainda continuaria, ficaria assim -->> produto/*
