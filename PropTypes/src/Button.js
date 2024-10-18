import React from 'react';

const Button = (props) => {
  return (
    <button style={{width: `${props.width}`}}>{props.children}</button>
  );
};

export default Button;
