// backend/routes/teachers.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Return a list of teachers (dummy data)
    res.json([{ id: 1, name: 'John Doe' }]);
});

module.exports = router;
