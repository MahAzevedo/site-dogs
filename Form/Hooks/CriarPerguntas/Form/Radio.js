import React from 'react'

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
    if (active === false) return null;
    return (
        <fildset style={{ pading: '2rem', marginBottom: '1rem', border: '2px solid #eee', }}>
            <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
            {options.map((option) => (
                <label key={option} style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
                >
                    <input
                        type="radio"
                        id={id}
                        checked={value === option}
                        value={option}
                        onChange={onChange}
                    />
                    {option}
                </label>
            ))}
        </fildset>
    );
};

export default Radio;
