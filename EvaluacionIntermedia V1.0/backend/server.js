// backend/server.js
const express = require('express');
const teachersRouter = require('./routes/teachers');
const evaluationsRouter = require('./routes/evaluations');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/teachers', teachersRouter);
app.use('/evaluations', evaluationsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
