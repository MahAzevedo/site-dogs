import React from 'react';
import React from './Form/Radio';

const perguntas = [
    {
        pergunta: 'Qual método é utilizado para criar componentes?',
        options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()',
        ],
        resposta: 'React.createElement()',
        id: 'p1',
    },
    {
        pergunta: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: 'p2',
    },
    {
        pergunta: 'Qual hook não é nativo?',
        options: ['useEffect()', 'useFetch()', 'useCallback()'],
        resposta: 'useFetch()',
        id: 'p3',
    },
    {
        pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: ['set', 'get', 'use'],
        resposta: 'use',
        id: 'p4',
    },
];

const App = () => {
    const [resposta, setResposta] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
    });

    const [slide, setSlide] = React.useState(0);

    function handleChange({ target }) {
        setRespostas({ ...respostas, [target.id]: target.value });
    };
    return (
        <form>
            {perguntas.map(pergunta => (
                <Radio
                    key={pergunta.id}
                    value={respostas[pergunta.id]}
                    onChange={handleChange}
                    {...pergunta}
                />
            ))};

            <button>Próxima</button>
        </form>
    );
};

export default App;
