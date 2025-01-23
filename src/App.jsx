import React, { useState } from 'react';
import Generate from './components/Generate';
import Password from './components/Password';
import Checkbox from './components/Checkbox';
import Length from './components/Length';
import './App.css';
import Strength from './components/Strength';

const App = () => {
    const [passwordProps, setPasswordProps] = useState({
        length: 10,
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSymbols: true,
    });

    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('easy'); // Track password strength

    const generatePassword = () => {
        const characterSet = [];
        const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = passwordProps;

        if (includeUppercase) {
            characterSet.push(...Array(26).fill().map((_, i) => String.fromCharCode(i + 65))); // A-Z
        }
        if (includeLowercase) {
            characterSet.push(...Array(26).fill().map((_, i) => String.fromCharCode(i + 97))); // a-z
        }
        if (includeNumbers) {
            characterSet.push(...Array(10).fill().map((_, i) => String(i))); // 0-9
        }
        if (includeSymbols) {
            characterSet.push(...'!@#$%^&*()_+-=[]{};:\'"\\|,.<>/?'); // Common symbols
        }

        if (characterSet.length === 0) {
            setPassword('Please select at least one character type.');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            newPassword += characterSet[randomIndex];
        }

        setPassword(newPassword);

        // Determine strength of password
        const strength = evaluateStrength(newPassword);
        setStrength(strength);
    };

    const evaluateStrength = (password) => {
        const length = password.length;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Define strength based on conditions
        if (length >= 12 && hasUppercase && hasLowercase && hasNumbers && hasSymbols) {
            return 'hard';
        } else if (length >= 8 && (hasUppercase || hasLowercase) && (hasNumbers || hasSymbols)) {
            return 'medium';
        } else {
            return 'easy';
        }
    };

    const handleCheckboxChange = (key) => {
        setPasswordProps((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleLengthChange = (length) => {
        setPasswordProps((prev) => ({
            ...prev,
            length,
        }));
    };

    return (
        <div className="app">
            <Password {...passwordProps} password={password} />
            <div className='options'>
            <Length onChange={handleLengthChange} />
            <div className="checkbox-container">
                <Checkbox
                    id="uppercase"
                    label="Include Uppercase Letters"
                    checked={passwordProps.includeUppercase}
                    onChange={() => handleCheckboxChange('includeUppercase')}
                />
                <Checkbox
                    id="lowercase"
                    label="Include Lowercase Letters"
                    checked={passwordProps.includeLowercase}
                    onChange={() => handleCheckboxChange('includeLowercase')}
                />
                <Checkbox
                    id="numbers"
                    label="Include Numbers"
                    checked={passwordProps.includeNumbers}
                    onChange={() => handleCheckboxChange('includeNumbers')}
                />
                <Checkbox
                    id="symbols"
                    label="Include Symbols"
                    checked={passwordProps.includeSymbols}
                    onChange={() => handleCheckboxChange('includeSymbols')}
                />
            </div>
            <Strength strength={strength} />
            <Generate onGenerate={generatePassword} />
            </div>
        </div>
    );
};

export default App;
