// frontend/src/components/CreateEvaluation.js
import React, { useState } from 'react';

const CreateEvaluation = () => {
    const [evaluationTitle, setEvaluationTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);
    const [correctOption, setCorrectOption] = useState('');

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleRemoveOption = (index) => {
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleCreateEvaluation = (e) => {
        e.preventDefault();

        // Implement logic to send evaluation data to the server
        console.log({
            title: evaluationTitle,
            questions: [{ question, options, correctOption }],
        });

        // Reset form fields
        setEvaluationTitle('');
        setQuestion('');
        setOptions(['', '']);
        setCorrectOption('');
    };

    return (
        <div>
            <h2>Create New Evaluation</h2>
            <form onSubmit={handleCreateEvaluation}>
                <label>
                    Evaluation Title:
                    <input
                        type="text"
                        value={evaluationTitle}
                        onChange={(e) => setEvaluationTitle(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Question:
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Options:
                    <ul>
                        {options.map((option, index) => (
                            <li key={index}>
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) =>
                                        handleOptionChange(index, e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveOption(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button type="button" onClick={handleAddOption}>
                        Add Option
                    </button>
                </label>
                <br />
                <label>
                    Correct Option:
                    <select
                        value={correctOption}
                        onChange={(e) => setCorrectOption(e.target.value)}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <button type="submit">Create Evaluation</button>
            </form>
        </div>
    );
};

export default CreateEvaluation;
