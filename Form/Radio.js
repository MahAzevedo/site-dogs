import React from 'react'

const Radio = ({ options, value, setValue, ...props }) => {
    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={({ target }) => setValue(target.value)}
                        {...props}
                    />
                    {option}
                </label>
            ))};
        </>
    );
};

export default Radio;


// radio vai usar <> fragmento </> pq ele tem vários labels