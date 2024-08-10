import React from 'react'

const App = () => {
    const [termos, setTermos] = React.useState(false);
    return (
        <form>
            {termos && <p>Aceitou os termos</p>}
            <label>
                <input
                    type="checkbox"
                    value="Termos"
                    checked={termos}
                    onChange={({ target }) => setTermos(target.checked)}
                />
                Aceito os termos.
            </label>
        </form>
    );
};

export default App;