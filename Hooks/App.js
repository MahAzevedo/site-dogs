import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');
    const { request, data, loading } = useFetch();

    React.useEffect(() => {
        request('https://ranekapi.origamid.dev/json/api/produto/')
    }, []);

    function handleClick({ target }) {
        setProduto(target.innerText);
    };

    if (loading) return <p>Carregando...</p>
    if (data === null) return null;
    return (
        <div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>

            {data.map((produto) => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                </div>
            ))}
        </div>
    );
};

export default App;
