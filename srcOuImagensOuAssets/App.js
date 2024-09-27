import React from 'react';
import './App.css';
import foto from './img/foto.jpg';

const App = () => {
    return (
        <div>
            <p className="fundo"></p>
            <img src={foto} alt="Cachorro" />
        </div>
    );
};

export default App;
