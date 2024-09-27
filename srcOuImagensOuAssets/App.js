import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import dog from './img/dog.svg';

const App = () => {
    return (
        <div>
            <p className="fundo"></p>
            <img src={foto} alt="Cachorro" />
            <img src={dog} alt="Dog" />
        </div>
    );
};

export default App;
