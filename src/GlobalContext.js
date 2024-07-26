// **********************  EXERCÍCIOS::::

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global


import { response } from 'express';
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        fecth(`https://ranekapi.origamid.dev/json/api/produto/`)
            .then((response) => response.json())
            .then((json) => setDados(json));
    }, []);

    function limparDados() {
        setProduto(null);
    };

    return (
        <GlobalContext.Provider value={{ dados, limparDados }}> {children}
        </GlobalContext.Provider>
    );
};




//***************** */


import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
    const global = React.useContext(GlobalContext);
    if (global.dados === null) return null;
    return <div>
        Produto: {' '}
        {global.dados.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
        ))};
    </div>;
};

export default Produto;