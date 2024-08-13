import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const AppExercicioCheckbox = () => {
    const [cores, setCores] = React.useState['vermelho', 'azul'] // se deixar os dois, ambos ficaram marcados/checked

    function handleChange({ target }) {
        if (target.checked) {
            setCores(...cores, target.value);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    };

    function checkColor(cor) {
        return cores.includes(cor);
    };

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value="azul"
                    checked={checkColor}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value="roxo"
                    checked={checkColor}
                    onChange={handleChange}
                />
                Roxo
            </label>
            <label>
                <input
                    type="checkbox"
                    value="laranja"
                    checked={checkColor}
                    onChange={handleChange}
                />
                Laranja
            </label>
            <label>
                <input
                    type="checkbox"
                    value="verde"
                    checked={checkColor}
                    onChange={handleChange}
                />
                Verde
            </label>
            <label>
                <input
                    type="checkbox"
                    value="vermelho"
                    checked={checkColor}
                    onChange={handleChange}
                />
                Vermelho
            </label>
            <label>
                <input
                    type="checkbox"
                    value="cinza"
                    checked={checkColor}
                    onChange={handleChange}
                />
                Cinza
            </label>
        </form>
    );
};

export default AppExercicioCheckbox;

