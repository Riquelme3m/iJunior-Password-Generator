import React, { useState } from 'react';
import Generate from './components/Generate/Generate';
import Password from './components/Password/Password';
import Checkbox from './components/Checkbox/Checkbox';
import Length from './components/Length/Length';
import './App.css';
import Strength from './components/Strength/Strength';

const App = () => {
    const [passwordProps, setPasswordProps] = useState({
        length: 10,
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSymbols: true,
    });

    const [password, setPassword] = useState('P4$5W0rD!');

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
        const strength = evaluateStrength(passwordProps);
        setStrength(strength);
    };

    const evaluateStrength = (passwordProps) => {
        let score = 0;
        const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = passwordProps;

        // confere se pelo menos uma opção de caractere esta selecionada
        const hasCharacterTypes = includeUppercase || includeLowercase || includeNumbers || includeSymbols;
        if (!hasCharacterTypes) return '-';

        // pontuação de 0 a 4
        if (includeUppercase) score++;
        if (includeLowercase) score++;
        if (includeNumbers) score++;
        if (includeSymbols) score++;
        

        // pontuação exponencial para tamanho da senha
        const lengthScore = Math.floor(Math.pow(length, 1.3) / 3);
        score *= lengthScore;
        console.log(score);

        // Determine strength based on total score
        if (score >= 52) return 'hard';
        if (score >= 14) return 'medium';
        if (score >= 7) return 'easy';
        return 'very easy';
    };

    const handleCheckboxChange = (key) => {
        const newProps = {
            ...passwordProps,
            [key]: !passwordProps[key]
        };
        setPasswordProps(newProps);
        const strength = evaluateStrength(newProps);
        setStrength(strength);
    };

    const handleLengthChange = (length) => {
        setPasswordProps((prev) => ({
            ...prev,
            length,
        }));
        const strength = evaluateStrength(passwordProps);
        setStrength(strength);
    };

    return (
        <div className="app">
            <h1>Password Generator</h1>
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
