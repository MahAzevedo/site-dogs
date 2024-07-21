import { directive } from '@babel/types';
import React from 'react';

const App = () => {
    const produtos = ['Notebook', 'Tablet', 'Smartphone'];
    return <p>{produtos}</p>
};

export default App;






//************ 

// FechamentoPedido
// condição no if-then-else (abaixo) ou switch-case:

if (brokerConfigurado == BROKER_1)
    broker1.efetuarPagamento();
else if (brokerConfigurado == BROKER_2)
    broker2.efetuarPagamento();
else if (brokerConfigurado == BROKER_3)
    broker3.efetuarPagamento();

// Solucao sem poliformismo



import React from 'react';
import { line } from 'stylis';

const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    }
];

const App = () => {
    const dados = produtos.filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500,);
    console.log(dados);

    return <section>
        {dados.map(({ id, nome, preco, cores }) => <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: {preco}</p>
            <ul>
                {cores.map((cor) =>
                    <li key={cor}>{cor}</li>)}
            </ul>
        </div>)}
    </section>;
};

export default App;