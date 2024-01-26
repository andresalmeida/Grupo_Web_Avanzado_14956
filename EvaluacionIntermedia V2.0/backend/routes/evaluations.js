// backend/routes/evaluations.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Return a list of evaluations (dummy data)
    res.json([{ id: 1, title: 'Sample Evaluation', questions: [] }]);
});

module.exports = router;
