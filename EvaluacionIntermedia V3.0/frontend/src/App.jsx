// frontend/src/App.jsx
import React, { useState } from 'react';
import Greetings from './components/Greetings';
import TeacherEntry from './components/TeacherEntry';
import CreateEvaluation from './components/CreateEvaluation';
import MyEvaluations from './components/MyEvaluations';

import './styles.css';

const App = () => {
    const [teacher, setTeacher] = useState(null);
    const [evaluations, setEvaluations] = useState([]);

    const handleTeacherEntered = (teacherName) => {
        setTeacher({ name: teacherName });
    };

    const handleCreateEvaluation = (evaluationData) => {
        setEvaluations([...evaluations, evaluationData]);
    };

    return (
        <div>
            <Greetings />
            {!teacher ? (
                <TeacherEntry onTeacherEntered={handleTeacherEntered} />
            ) : (
                <>
                    <CreateEvaluation
                        teacherName={teacher.name} 
                        onCreateEvaluation={handleCreateEvaluation}
                    />
                    <MyEvaluations evaluations={evaluations} />
                </>
            )}
        </div>
    );
};

export default App;
