import React from 'react'

const Select = ({ options }) => {
    return (
        <select>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))};
        </select>
    );
};

export default Select;
