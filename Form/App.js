import React from 'react';
import Input from './Form/Input';
import Checkbox from './Checkbox';

const App = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [produto, setProduto] = React.useState('');
    const [cor, setCor] = React.useState('Vermelho');
    const [frutas, setFrutas] = React.useState('');
    const [linguagens, setLinguagens] = React.useState(['Javascript', 'PHP', 'Ruby']);

    return (
        <form>
            <h2>Checkbox</h2>
            <Checkbox options={['Javascript', 'PHP', 'Ruby']} />

            <h2>Cores</h2>
            <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

            <h2>Frutas</h2>
            <Radio options={['Limão', 'Laranja', 'Uva']} value={frutas} setValue={setFrutas} />

            <Select
                options={['Smartphone', 'Tablet']}
                value={produto}
                setValue={setProduto}
            />

            <Input
                id="nome" label="Nome" value={nome} setValue={setNome} required />
            <Input id="email" label="E-mail" value={email} setValue={setEmail} required />
            <button>Enviar</button>
        </form>
    );
};

export default App;

// mesmo conteúdo para o Select-input



// Formulário é algo que é basicamente a mesma coisa, algo que não se modifica muito, então, geralmente pode ser definido como componente, ou seja, é algo que pode ser reaproveitado sempre, cada um de forma específica, mas, da fprma mais simples possível, e como? Simplesmente chamando o componente e passando para ele o que precisar dentro dele.

// input text: password, textarea,
// input do tipo: checkbos, radio, cores, e etc... não são iguais ao input text, então, é preferível criar outro componente para eles.

// input: no caso do Input, é legal fazer um estado ( fazer um useState ou invés de usar o objeto que é quando usamos as chaves) para cada, ou seja, um useState para nome, um esuState para email, e por aí segue, pq? Pq vamos ter validação específica para cada item, então, simplesmente fica mais fácil assim.

// linha 8: quando coloco a cor vermelho no entre aspas '', significa que estou selecionando essa cor, ou seja, se deixasse sem nada, quando eu fosse selecionar esse radio, esse círculo estaria vazio, porém quando coloco alguma coisa dentro das 'aspas', significa que j;á vem pre selecionado para o usuário.
