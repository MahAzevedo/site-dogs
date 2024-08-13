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

    // function checkColor(cor) {
    //     return cores.includes(cor);
    // };

    return (
        <form>
            {coresArray.map((cor, index) =>
                <label key={index} style={{ textTransform: 'capitalize' }}>
                    <input
                        type="checkbox"
                        value="cor"
                        checked={cores.includes(cor)}
                        onChange={handleChange}
                    />
                    {cor}
                </label>
            )};
        </form>
    );
};

export default AppExercicioCheckbox;

/*

OBS.:
--->>> linha 22: index aparece pq se precisar repetir cores, com ele é possível, é só adicioná-lo no map para executar e no label como kye;

--->>> linha 27: se usar: checked={cores.includes(cor)}, exclui a function da linha 16 a 18; 
se usar o: checkedColor da function então substitui por: checkColor e usa a function da linha 16 a 18.
 
*/