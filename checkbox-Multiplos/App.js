import React from 'react'

const App = () => {
    const [cores, setCores] = React.useState([]);

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value={cores}
                    checked={cores}
                    onChange={({ target }) => setCores(target.checked)}
                />
                Aceito os termos
            </label>
        </form>
    );
};

export default App;
