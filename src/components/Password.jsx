import React from 'react';
import './Password.css';

const Password = ({ password }) => {
    const copyPassword = () => {
        if (password) {
            navigator.clipboard.writeText(password);
            alert('Password copied to clipboard!');
        }
    };

    return (
        <div className="container-password">
            <p id="password">{password}</p>
            <button id="copy" onClick={copyPassword}>
                Copy
            </button>
        </div>
    );
};

export default Password;
