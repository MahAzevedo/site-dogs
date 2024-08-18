import React from 'react'
import Input from './Form/Input';

const App = () => {
    const [cep, setCep] = React.useState('');
    return (
        <form>
            <Input
                label="CEP"
                id="cep"
                type="text"
                value={cep}
                setValue={setCep}
                placeholder="00000-000"
            />
        </form>
    );
};

export default App;
