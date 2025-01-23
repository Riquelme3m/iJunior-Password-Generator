import React from 'react'
import "./Checkbox.css"

const Checkbox = ({ id, label}) => {
    return (
        <div id={id}>
        <input
            type="checkbox"
            id={id}
        />
        <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox
