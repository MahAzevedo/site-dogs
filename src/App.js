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

    function handleClick() {
        setContar(contar + 1);
        setItems([...items, 'Item' + (contar + 1)]);
    };
    return (
        <div>
            {items.map(item => <li key={item}>{item}</li>)}
            <button onClick={handleClick}>{contar}</button>
        </div>
    )
}

export default App;


//*************************** */


// como o professor fez com : useState:
import Produto from './Produto'

const App = () => {
    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);

    async function handleClick(event) {
        setCarregando(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
        const json = await response.json();
        setDados(json);
        setCarregando(false);
    };

    return (
        <div>
            <button style={{ margin: '.5rem' }} onClick={handleClick}>tablet</button>
            <button style={{ margin: '.5rem' }} onClick={handleClick}>smartphone</button>
            <button style={{ margin: '.5rem' }} onClick={handleClick}>notebook</button>
            {carregando && <p>Carregando...</p>}
            {!carregando && dados && <Produto dados={dados} />}
        </div>
    )
}
//{!carregando && dados && <Produto dados={dados} />} se carregando for falso E se dados EXISTIREM ai sim, vc mostra o produto com os dados.   é o que tá escrito

export default App;

//******************************** */

// supondo que eu tenho página Produto aqui:
import React from 'react'

const Produto = ({ dados }) => {
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>{dados.preco}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
    )
}

export default Produto;


//**************************** */

// usando -->>>>>      useEffect

import React from 'react'

const App = () => {
    const [contar, setContar] = React.useState(0);

    React.useEffect(() => {
        console.log('Executou');
    }, []);

    return <button onClick={() => contar + 1}>{contar}</button>
}

export default App


// no useEffect o primeiro é uma função e o segundo é um array; então se deixar os colchetes vazios depois das chaves, esse colchete será puro, ou seja, se for por exemplo uma busca de produtos em um site com essa array vazia/pura só vai pesquisar uma vez e é isso.
// Isso quer dizer, que no useEffect temos dois argumentos, o primeiro é a chamada de callback (() => {}); e o segundo é a chamada de dependências [] e aqui dentro tem sempre que passar as dependências [contar] pq senão colocar a dependência o estado não vai mudar e vai sem atulização do que for para atualizar. Quando estiver vazia [] é uma dependência pura só vai ocorrer uma vez, quando tiver algo dentro vai ocorer qauntas vezes for passado para ela contar.


// exercício:     useEffect

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


import React from 'react'

const App = () => {
    const [produto, setProduto] = React.useState(null);

    async function handleClick(event) {
        const responde = await fecth(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
        const json = await response.json();
        setDados(json);
    };

    React.useEffect(() => {
        ('Preferência do usuário')
    }, []);
    return (
        <div>
            <button style={{ margin: '.5rem' }} onClick={(handleClick)}>{notebook}</button>
            <button style={{ margin: '.5rem' }} onClick={(handleClick)}>{notebook}</button>
        </div>
    )
};

export default App;


//************ */

import Produto from './Produto'

const App = ({ produto }) => {
    return (
        <div>
            <h1>{produto.nome}</h1>
            <p>{produto.preco}</p>
        </div>
    )
};

export default Produto;

//****************** */











import React from 'react'

const App = () => {
    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto');
        if (produtoLocal !== null) setProduto(produtoLocal);
    }, []);

    React.useEffect(() => {
        if (produto !== null)
            window.localStorage.setItem('produto', produto);
    }, [produto]);

    return (
        <div>
            <h1>Preferência: {produto}</h1>
            <button onClick={handleClick} style={{ margin: '1rem' }}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
            <Produto produto={produto} />
        </div>
    )
}

export default App

// agora vou lá em Produto.js acesso e mexo nele:
// escrevi aqui embaixo:

import React from 'react'

const Produto = ({ produto }) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        if (produto !== null)
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
                .then((response) => response.json())
                .then((json) => setDados(json));
    }, [produto]);

    if (dados === null) return null;
    return <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
    </div>
}

export default Produto;




import React from 'react'

const App = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);

    return (
        <div>
            <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
        </div>
    )
}

export default App
