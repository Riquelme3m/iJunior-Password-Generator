import React from 'react';
import './Generate.css';

const Generate = ({ onGenerate }) => {
    return (
        <div>
            <button onClick={onGenerate} id="generate">
                GENERATE
                <svg
                    className="arrow-right"
                    width="8"
                    height="8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                >
                    <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
                </svg>
            </button>
        </div>
    );
};

export default Generate;
