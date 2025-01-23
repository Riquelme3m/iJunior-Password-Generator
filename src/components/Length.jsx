import React, { useState } from 'react'
import "./Length.css"

const Length = () => {
    const [length, setLength] = useState(10);

    const handleChange = (e) => {
        const value = e.target.value;
        setLength(value);
        const ratio = (value - e.target.min) / (e.target.max - e.target.min);
        e.target.style.setProperty('--ratio', ratio);
    }

    return (
        <div className="character-container">
            <label htmlFor="length">Character Length</label>
            <p>{length}</p>
            <input 
                type="range" 
                id="length" 
                min="0" 
                max="20" 
                value={length} 
                onChange={handleChange}
                style={{ '--ratio': 0.5 }}
            />
        </div>
    )
}

export default Length