import React from 'react'
import { line } from 'stylis';

const Produto = ({ nome, propriedades }) => {
    return (
        <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
            <p>{nome}</p>
            <ul>
                {propriedades.map(propriedades) => (
                <li>{propriedades}</li>
                )};
            </ul>
        </div>
    )
};

export default Produto;
