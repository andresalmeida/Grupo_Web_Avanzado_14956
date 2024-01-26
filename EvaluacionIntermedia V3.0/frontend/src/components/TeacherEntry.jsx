// frontend/src/components/TeacherEntry.js
import React, { useState } from 'react';

const TeacherEntry = ({ onTeacherEntered }) => {
    const [teacherName, setTeacherName] = useState('');

    const handleTeacherEntry = () => {
        onTeacherEntered(teacherName);
    };

    return (
        <div>
            <h2>Ingrese su nombre:</h2>
            <input
                type="text"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
            />
            <button onClick={handleTeacherEntry}>Enviar</button>
        </div>
    );
};

export default TeacherEntry;
