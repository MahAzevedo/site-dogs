import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button 
    style={{
        margin: props.margin, 
        width: `${props.width}px`, 
        height: `${props.width/3}px`,
    }}
    >
        {props.children}
    </button>
  );
};

Button.defaultProps = {
    margin: '10px'
};

Button.PropTypes = {
    width: PropTypes.number.isRequired, /*só escrever o que quer abaixo desse aqui, como o margin, por exemplo*/
    margin: PropTypes.string  /* não precisa colocar que é requerido, só p/ os que forem requeridos*/
};

export default Button;

/*
-->>O PropTypes, serve para mostrar o erro no console, para alertar.
-->>Nele onde está o .number, pode escolher outra coisa, opde ser boolean, function, o que precisar
*/ 