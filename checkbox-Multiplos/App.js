import React from 'react'

const App = () => {
    const [cores, setCores] = React.useState([]);

    function handleChange({ target }) {
        console.log(target);
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value={azul}
                    //checked={termos}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value={vermelho}
                    // checked={termos}
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    );
};

export default App;
