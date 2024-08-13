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
                    checked={cores.includes('azul')}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value={vermelho}
                    checked={cores.includes('vermelho')}
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    );
};

export default App;

// com checkbox Multiplos, mas, sem function, feito direto no return
// no AppCheckedComFuncao está a forma feita com function e no return no checked está o objeto, ou seja, a function tá representada alí pelo checked={handlechange}
