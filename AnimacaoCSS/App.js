import React from 'react';

const App = () => {
    const [ativar, setAtivar] = React.useState(false);
    return (
        <div>
            <button>Ativar</button>
            <Produto />
        </div>
    );
};

export default App;
