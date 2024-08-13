import React from 'react'

const App = () => {
    const [cores, setCores] = React.useState(['vermelho']);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        };
    };

    function ckeckColor(cor) {
        return cores.includes(cor);
    };

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value={azul}
                    checked={ckeckColor}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value={vermelho}
                    checked={ckeckColor}
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    );
};

export default App;
