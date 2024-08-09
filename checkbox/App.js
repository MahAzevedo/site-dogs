import React from 'react'

const App = () => {
    const [termos, setTermos] = React.useState(false);
    return (
        <form>
            <label htmlFor=" ">
                <input type="checkbox" />
                Aceito os termos.
            </label>
        </form>
    );
};

export default App;