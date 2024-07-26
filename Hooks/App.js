import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');
    const { request, data } = useFetch();

    function handleClick({ event }) {
        setProduto(target.innerText);
    };

    return (
        <div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
        </div>
    );
};

export default App;
