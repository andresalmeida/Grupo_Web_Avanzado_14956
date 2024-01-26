// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Endpoint to save evaluations to a file
app.post('/saveEvaluation', (req, res) => {
    const evaluationData = req.body;

    // Save the evaluation data to a file (simple example, you might want to use a database later)
    const filePath = path.join(__dirname, 'database', 'evaluations.json');
    const existingData = fs.readFileSync(filePath, 'utf-8');
    const evaluations = existingData ? JSON.parse(existingData) : [];
    evaluations.push(evaluationData);

    fs.writeFileSync(filePath, JSON.stringify(evaluations, null, 2));

    res.json({ message: 'Evaluation saved successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
