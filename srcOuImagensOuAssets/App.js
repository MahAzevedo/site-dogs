import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import { ReactComponent as Dog } from './img/dog.svg';

const App = () => {
    return (
        <div>
            <p className="fundo"></p>
            <Dog />
            <img src={foto} alt="Cachorro" />
        </div>
    );
};

export default App;
