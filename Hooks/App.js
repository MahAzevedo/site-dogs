import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');

    function handleClick({ event }) {
        setProduto(target.innerText);
    };

    return (
        <div>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
        </div>
    );
};

export default App;
