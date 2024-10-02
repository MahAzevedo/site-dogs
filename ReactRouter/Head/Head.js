import React from 'react';

const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title;
        console.log(props);
    }, [props]); // é assim que monta um React.useEffect()
    return (
        <>

        </>
    );
};

export default Head;


/* Pergunta: Como montar um React.useEffect() ????
   Resposta: -->>>  é assim que monta um: 
    -->>>     React.useEffect(() => {}, []);
*/

/*
 Um Hook é assim -->>> React.useEffect(), isso é um hook

 Como usamos o React, não temos acesso ao Head do site, pra acessá-lo dá para usar um componente ou um CustonHook, não tem diferença, que vai receber propriedade e essa propriedade no useEffect(() => {}) vai modificar o título que eu quiser e modificar qualquer meta tag que eu quiser utilizando JavaScript puro mesmo.
*/