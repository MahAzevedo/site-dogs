// **********************  EXERCÍCIOS::::

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global


import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
};

const App = () => {
    const [dados, setDados] = React.useState(null);
    const [produto, setProduto] = React.useState(null);

    const UserContext = React.userContext();

    function limparDados() {
        setProduto(produto + 1)
    }, [];

    fecth(`https://ranekapi.origamid.dev/json/api/produto/${}`);
    return (
        <div>
            <button>{produto}</button>
        </div>
    )
}

export default App
//***************** */
import React from 'react'

const GlobalContext = () => {
    return (
        <div>
            <GlobalContext>
                <Produto />
            </GlobalContext>
        </div>
    )
}

export default GlobalContext
