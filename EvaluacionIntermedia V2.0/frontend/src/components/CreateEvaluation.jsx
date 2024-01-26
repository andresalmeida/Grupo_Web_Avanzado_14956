// frontend/src/components/CreateEvaluation.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateEvaluation = ({ teacherName, onCreateEvaluation }) => {
    const [evaluationTitle, setEvaluationTitle] = useState('');
    const [questions, setQuestions] = useState([{ question: '', options: [''], correctOption: '' }]);
    const [displayedInfo, setDisplayedInfo] = useState('');

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: [''], correctOption: '' }]);
    };

    const handleRemoveQuestion = (index) => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index, questionValue) => {
        const newQuestions = [...questions];
        newQuestions[index].question = questionValue;
        setQuestions(newQuestions);
        updateDisplayedInfo();
    };

    const handleAddOption = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.push('');
        setQuestions(newQuestions);
        updateDisplayedInfo();
    };

    const handleRemoveOption = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(newQuestions);
        updateDisplayedInfo();
    };

    const handleOptionChange = (questionIndex, optionIndex, optionValue) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = optionValue;
        setQuestions(newQuestions);
        updateDisplayedInfo();
    };

    const handleCorrectOptionChange = (questionIndex, correctOptionValue) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].correctOption = correctOptionValue;
        setQuestions(newQuestions);
        updateDisplayedInfo();
    };

    const updateDisplayedInfo = () => {
        const info = `Teacher: ${teacherName}\nTitle: ${evaluationTitle}\n\n`;
        const questionInfo = questions
            .map(
                (question, index) =>
                    `Question ${index + 1}:\n${question.question}\nOptions: ${question.options.join(
                        ', '
                    )}\nCorrect Option: ${question.correctOption}\n\n`
            )
            .join('');
        setDisplayedInfo(info + questionInfo);
    };

    const handleCreateEvaluation = async (e) => {
        e.preventDefault();

        const evaluationData = {
            teacherName,
            title: evaluationTitle,
            questions,
        };

        // Save the evaluation data to the server
        try {
            const response = await axios.post('http://localhost:5000/saveEvaluation', evaluationData);
            console.log(response.data.message);

            // Update the frontend state with the new evaluation
            onCreateEvaluation(evaluationData);

            // Reset form fields
            setEvaluationTitle('');
            setQuestions([{ question: '', options: [''], correctOption: '' }]);
            setDisplayedInfo('');
        } catch (error) {
            console.error('Error saving evaluation:', error);
        }
    };

    return (
        <div>
            <h2>Create New Evaluation for {teacherName}</h2>
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
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <label>
                            Question:
                            <input
                                type="text"
                                value={question.question}
                                onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Options:
                            <ul>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) =>
                                                handleOptionChange(
                                                    questionIndex,
                                                    optionIndex,
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveOption(questionIndex, optionIndex)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                onClick={() => handleAddOption(questionIndex)}
                            >
                                Add Option
                            </button>
                        </label>
                        <br />
                        <label>
                            Correct Option:
                            <select
                                value={question.correctOption}
                                onChange={(e) =>
                                    handleCorrectOptionChange(
                                        questionIndex,
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">Select Correct Option</option>
                                {question.options.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <button
                            type="button"
                            onClick={() => handleRemoveQuestion(questionIndex)}
                        >
                            Remove Question
                        </button>
                        <hr />
                    </div>
                ))}
                <button type="button" onClick={handleAddQuestion} style={{ marginBottom: '10px' }}>
                    Add Question
                </button>
                <br />
                
                <button type="submit">Create Evaluation</button>
                <div>
                    <h3>Entered Information:</h3>
                    <pre>{displayedInfo}</pre>
                </div>
            </form>
        </div>
    );
};

export default CreateEvaluation;
