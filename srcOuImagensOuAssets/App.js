import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import { ReactComponent } from './img/dog.svg';

const App = () => {
    return (
        <div>
            <p className="fundo"></p>
            <ReactComponent />
            <img src={dog} alt="Dog" />
            <img src={foto} alt="Cachorro" />
        </div>
    );
};

export default App;
