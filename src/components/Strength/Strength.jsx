import React from 'react';
import './Strength.css';

const Strength = ({ strength }) => {
    const blocks = [1, 2, 3, 4]; // Four blocks

    // Determine the number of filled blocks based on the password strength
    const getBlockClass = (index) => {
        if (strength === 'hard') {
            return 'hard'; // Fill all blocks for 'hard' strength
        }
        if (strength === 'medium') {
            return index < 3 ? 'medium' : ''; // Fill first 3 blocks for 'medium' strength
        }
        if (strength === 'easy') {
            return index < 2 ? 'easy' : ''; // Fill first 2 blocks for 'easy' strength
        }
        return index < 1 ? 'very easy' : ''; // Fill first 1 blocks for 'very easy' strength
    };

    return (
        <div className="container-strength">
            <h2>STRENGTH</h2>
            <div id="strength-data">
                <h1>{strength.toUpperCase()}</h1>
                <div className="blocks">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className={getBlockClass(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Strength;
