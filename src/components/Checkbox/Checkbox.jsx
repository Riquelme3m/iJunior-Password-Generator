import React from 'react'
import "./Checkbox.css"

const Checkbox = ({ id, label, checked, onChange }) => {
    return (
        <div className={id}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;