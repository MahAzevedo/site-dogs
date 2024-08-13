import React from 'react'

const AppCheckedComFuncao = () => {
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
                    checked={cores.includes('azul')}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value="vermelho"
                    checked={cores.includes('vermelho')}
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    );
};

export default AppCheckedComFuncao;
