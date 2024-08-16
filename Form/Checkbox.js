import React from 'react'

const Checkbox = ({ options }) => {
    return (
        <>
            {options.map((option) =>
                <label>
                    <input
                        type="checkbox"
                        value={option}
                    />
                </label>
            )};
        </>
    );
};
export default Checkbox;
