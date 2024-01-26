// frontend/src/components/MyEvaluations.jsx
import React from 'react';

const MyEvaluations = ({ evaluations }) => {
    return (
        <div>
            <h2>Mis Evaluaciones</h2>
            {evaluations.map((evaluation, index) => (
                <div key={index}>
                    <h3>{evaluation.title}</h3>
                    <p>Docente: {evaluation.teacherName}</p>
                    {/* Add more details about the evaluation as needed */}
                </div>
            ))}
        </div>
    );
};

export default MyEvaluations;
