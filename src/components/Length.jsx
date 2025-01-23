import React, { useState } from 'react'
import "./Length.css"

const Length = () => {
    const [length, setLength] = useState(10);
    return (
        <div className="character-container">
            <label htmlFor="length">Character Length</label>
            <p>{length}</p>
            <input type="range" id="length" min="0" max="20" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
    )
}

export default Length